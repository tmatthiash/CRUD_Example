import { useState } from 'react';
import { deleteItem, editItem, postNewItem } from '../../Clients/itemClient';
import { Item } from '../../Types/item';
import './ItemRow.css';

interface ItemRowProps {
  item: Item;
  getAndSetItems: () => void;
}

export const ItemRow = (props: ItemRowProps) => {
  const [name, setName] = useState<string>(props.item.name);
  const [description, setDescription] = useState<string>(
    props.item.description
  );

  const saveItem = async () => {
    const itemToSave: Item = {
      id: props.item.id,
      name,
      description,
    };
    if (itemToSave.id === '') {
      await postNewItem(itemToSave);
      setName('');
      setDescription('');
    } else {
      await editItem(itemToSave);
    }
    props.getAndSetItems();
  };

  const removeItem = async () => {
    await deleteItem(props.item.id);
    props.getAndSetItems();
  };

  const { item } = props;
  return (
    <div key={item.id}>
      <input
        className="item-row-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="item-row-input item-row-input-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={saveItem} className="item-row-button">
        Save
      </button>
      <button onClick={removeItem} className="item-row-button">
        Delete
      </button>
    </div>
  );
};

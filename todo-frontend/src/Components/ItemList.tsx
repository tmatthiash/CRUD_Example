import { useEffect, useState } from 'react';
import { getAllItems } from '../Clients/itemClient';
import { Item } from '../Types/item';
import { ItemRow } from './ItemRow/ItemRow';

export const ItemList = () => {
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    getAndSetItemList();
  }, []);

  const getAndSetItemList = () => {
    getAllItems().then((res) => {
      setItemList(res);
    });
  };

  const blankItem: Item = {
    id: '',
    name: '',
    description: '',
  };

  return (
    <div>
      <h2>List of Items</h2>
      {[...itemList, blankItem].map((item) => {
        return (
          <ItemRow
            key={item.id}
            item={item}
            getAndSetItems={getAndSetItemList}
          />
        );
      })}
    </div>
  );
};

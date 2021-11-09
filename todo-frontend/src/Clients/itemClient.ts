import axios from 'axios';
import { Item } from '../Types/item';

export const getAllItems = (): Promise<Item[]> => {
  return axios.get('http://localhost:8080/api/items').then((res) => {
    return res.data.items;
  });
};

export const postNewItem = (item: Item): Promise<string> => {
  return axios.post('http://localhost:8080/api/item', item).then((res) => {
    return res.data;
  });
};

export const deleteItem = (id: string): Promise<string> => {
  return axios.delete(`http://localhost:8080/api/item/${id}`).then((res) => {
    return res.data;
  });
};

export const editItem = (item: Item): Promise<Item> => {
  return axios
    .put(`http://localhost:8080/api/item/${item.id}`, item)
    .then((res) => {
      return res.data;
    });
};

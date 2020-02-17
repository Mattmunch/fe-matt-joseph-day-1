import { useState, useEffect } from 'react';
import { getItems } from '../services/itemsApi';

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then(items => setItems(items));
  });
  return items;
};
export default useItems;

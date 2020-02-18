import React from 'react';
import ItemForm from './itemForm/itemForm';
import ItemList from '../components/itemList/ItemList';
import useItems from '../hooks/useItems';

export default function App() {
  const { items, setItems } = useItems();
  return (
    <>
      <ItemForm  />
      <ItemList items={items} setItems={setItems} />
    </>
  );
}
  

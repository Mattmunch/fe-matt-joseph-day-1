import React from 'react';
import useItems from '../../hooks/useItems';
import Item from '../item/Item';

const ItemList = () => {
  const items = useItems();
  const itemElements = items.map(({ name, expirationDate }, i) => (
    <li key={i}>
      <Item name={name} expirationDate={expirationDate} />
    </li>
  ));
  return (
    <>
      {itemElements}
    </>
  );
};


export default ItemList;

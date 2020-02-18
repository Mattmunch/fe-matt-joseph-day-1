import React from 'react';
import Item from '../item/Item';
import PropTypes from 'prop-types';


const ItemList = ({ items, setItems }) => {
  const itemElements = items.map(({ name, expirationDate, _id }) => (
    <li key={_id}>
      <Item name={name} expirationDate={expirationDate} id={_id} setItems={setItems}/>
    </li>
  ));
  return (
    <>
      {itemElements}
    </>
  );
};
ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired
};

export default ItemList;

import React from 'react';
import PropTypes from 'prop-types';
import { deleteItem } from '../../services/itemsApi';

const Item = ({ name, expirationDate, id, setItems }) => {
  const handleDelete = () => {
    deleteItem(id)
      .then(deletedItem => setItems(items => items.filter(item => item._id !== deletedItem._id)));
  };
  return (
    <section>
      <h2>{name}</h2>
      <p>{expirationDate}</p>
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setItems:PropTypes.func.isRequired
};

export default Item;

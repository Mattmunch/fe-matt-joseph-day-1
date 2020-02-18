import React, { useState } from 'react';
import { postItem } from '../../services/itemsApi';

const ItemForm = () => {
  const [items, setItems] = useState([]);
  const itemInputs = items.map(
    ({ name, expirationDate }, i) => {
      const handleChange = key => ({ target }) =>
        setItems(oldItems =>
          oldItems.map((oi, oiIndex) => {
            if(oiIndex === i) return { ...oi, [key]: target.value };
            return oi;
          })
        );
      return (
        <div key={i}>
          <input
            type='text'
            value={name}
            onChange={handleChange('name')}
            placeholder='Item Name'
          />
          <input 
            type='date'
            value={expirationDate}
            onChange={handleChange('expirationDate')}
            placeholder='Expiration Date'
          />
        </div>
      );
    }
  );

  const handleSubmit = event => {
    event.preventDefault();
    postItem(items);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          type='button'
          onClick={() =>
            setItems(oi => [
              ...oi,
              { name: '', expirationDate: '' }
            ])
          }
        >
          Add An Item
        </button>
        {itemInputs}
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};
export default ItemForm;

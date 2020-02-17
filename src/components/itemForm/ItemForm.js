import React, { useState } from 'react';


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
    return fetch(
      'https://fathomless-meadow-03057.herokuapp.com/api/v1/recipes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          origin: true
        },
        body: JSON.stringify({
          items
        })
      }
    )
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if(!ok) throw json;
        return json;
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          type='button'
          onClick={() =>
            setItems(oi => [
              ...oi,
              { name: '', amount: 0, measurement: 'grams' }
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

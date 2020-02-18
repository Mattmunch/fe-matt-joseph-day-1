
export const getItems = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://matt-and-joseph-fridge.herokuapp.com/api/v1/items')
    .then(res => res.json());
};

export const deleteItem = (id) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://matt-and-joseph-fridge.herokuapp.com/api/v1/items/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      }
    }
  )
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
  
export const postItem = (items) => {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://matt-and-joseph-fridge.herokuapp.com/api/v1/items',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      },
      body: JSON.stringify({
        items: items
      })
    }
  )
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getItems = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://matt-and-joseph-fridge.herokuapp.com/api/v1/items')
    .then(res => res.json());
};
  

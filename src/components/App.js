import React from 'react';
import ItemForm from './itemForm/itemForm';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route path='/' component={ItemList}/>
      <Route path='/itemForm' component={ItemForm} />
    </Router>
  );
}
  

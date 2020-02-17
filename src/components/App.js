import React from 'react';
import ItemForm from './itemForm/itemForm';
import ItemList from '../components/itemList/ItemList';
import Header from '../components/header/Header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={ItemList}/>
      <Route path='/itemForm' component={ItemForm} />
    </Router>
  );
}
  

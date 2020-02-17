import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to='/'>
        <p>
        Item List
        </p>
      </Link>
      <Link to='/itemForm'>
        <p>
        Item Form
        </p>
      </Link>
    </nav>
  </header>
);
export default Header;

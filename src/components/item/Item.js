import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ name, expirationDate }) => {

  return (
    <section>
      <h2>{name}</h2>
      <p>{expirationDate}</p>
    </section>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired
};

export default Item;

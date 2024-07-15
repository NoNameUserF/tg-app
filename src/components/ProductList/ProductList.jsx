import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = () => {
  return (
    <div>
      ProductList
      <Link to={'/form'}>Go TO Form</Link>
    </div>
  );
};

export default ProductList;

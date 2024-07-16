import React from 'react';
import Button from '../Button/Button';
import './index.css';
const ProductListItem = ({ item, add }) => {
  return (
    <div className='product_item'>
      <div className='wrapper'>
        <div className='product-list-id-title'>
          <div>{item.id}</div>
          <div style={{ whiteSpace: 'nowrap' }}>{item.title}</div>
        </div>
        <div>{item.price}</div>
        <div>{item.description}</div>
      </div>
      <Button close={() => add(item)}>Добавить в корзину</Button>
    </div>
  );
};

export default ProductListItem;

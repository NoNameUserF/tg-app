import './index.css';
import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
const ProductList = () => {
  const products = [
    { id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые' },
    { id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая' },
    { id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые' },
    { id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая' },
    { id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые' },
    { id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая' },
    { id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые' },
    { id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая' },
  ];

  const [added, setAdded] = useState([]);
  const { tg } = useTelegram();
  const add = item => {
    const alreadyAdd = added.find(add => add.id === item.id);

    let newList = [];
    if (alreadyAdd) {
      added.filter(item => item.id !== alreadyAdd.id);
    } else {
      newList = [...newList, item];
    }

    if (!newList.length) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: 'Buy now',
      });
    }
  };
  return (
    <div className='list_container'>
      {products.map(item => (
        <ProductListItem add={add} item={item}></ProductListItem>
      ))}
    </div>
  );
};

export default ProductList;

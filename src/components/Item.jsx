import React from 'react';

const Item = ({ item, onAdd }) => {
  return (
    <div className='item'>
      <img src={'./img/' + item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
    </div>
  );
};

export default Item;
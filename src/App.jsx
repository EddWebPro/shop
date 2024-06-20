import React, { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Itemss from "./components/Itemss"


const App = () => {

  const [orders, setOrders] = useState([]);
  // const [orderDelete, setOrderDelete] = useState([]);
  const items = [
    {
      id: 1,
      title: 'Стул белый',
      img: 'cheir-white.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 2,
      title: 'Кресло',
      img: 'armchair.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      category: 'armchairs',
      price: '49.99'
    },
    {
      id: 3,
      title: 'Стул черный',
      img: 'cheir-black.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 4,
      title: 'Диван',
      img: 'sofa.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      category: 'sofas',
      price: '49.99'
    },
    {
      id: 5,
      title: 'Стул серый',
      img: 'cheir-grey.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 6,
      title: 'Лампа',
      img: 'lamp.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      category: 'lamps',
      price: '49.99'
    }
  ];


  const deleteOrder = (id) => {
    const updatedOrder = orders.filter(order => order.id !== id);
    setOrders(updatedOrder)
    console.log(id);
  }


  const addToOrder = (item) => {
    let isInArray = false
    orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray)

    setOrders([...orders, item]);
  };
  return (
    <>
      <div className="wrapper">
        <Header orders={orders} onDelete={deleteOrder}/>
        <Itemss items={items} onAdd={addToOrder}/>
        <Footer />
      </div>
    </>
  );

}

export default App;
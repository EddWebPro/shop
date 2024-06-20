import React from 'react'
import Item from './Item'

const Itemss = ({items, onAdd}) => {
    return (
        <main>
            {items.map(el => (
                <Item key={el.id} item={el} onAdd={onAdd}/>

            ))}
        </main>
    )
  }


export default Itemss
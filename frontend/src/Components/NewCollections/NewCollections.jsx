import React from 'react'
import './NewCollections.css'
import item from '../Assets/data'
import Item from '../Item/Item'

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {item.map((items, i) => {
                    return <Item
                        key={i}
                        id={items.id}
                        name={items.name}
                        image={items.image}
                        new_price={items.new_price}
                        old_price={items.old_price}
                    />
                })}
            </div>
        </div>
    )
}

export default NewCollections

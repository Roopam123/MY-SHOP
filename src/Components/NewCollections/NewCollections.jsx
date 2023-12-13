import React from 'react'
import "./NewCollections.css"
import new_collections from '../../Assets/new_collections'
import Items from '../../Components/Items/Items'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collections.map((ele,index)=>(
                <Items 
                key={index} 
                id={ele.id} 
                name={ele.name} 
                image={ele.image} 
                new_price={ele.new_price}
                old_price={ele.old_price}
                      
                      />
            ))}
        </div>
    </div>
  )
}

export default NewCollections
import React from 'react';
import './Catcard.scss';
import Rating from '../Rating/Rating';
import { CartState } from '../../Context/Context';

function Catcard({item}) {

  const {state : { cart},
dispatch
} = CartState()
  return (
    
    <div className="projectCard">
    <img src={item.image} alt="" />
    <span className='rate'>
    
    </span>
   
    <div className="info">
  
    
      <div className="texts">
      <Rating rating={item.ratings}/>
      {
          item.fastDelivery?(<h2 style={{fontSize:"12px",color:"#e21b5a"}}>Fast Delivery</h2>):(<h2 style={{fontSize:"12px"}}>4 days Delivery</h2>)

        }
        <h2>{item.price} $</h2>
        <span>
          {item.name}
       
        </span>
        <div className='cart'>
          {
            cart.some(p=>p.id===item.id)
            ?
            ( <button onClick={()=>dispatch({ type:"Remove_from_cart",payload:item})} className='Remove'>Remove from cart</button>)
            :
            (<button onClick={()=>dispatch({ type:"Add_to_cart",payload:item})} style={ !item.inStock ? {backgroundColor:"transparent"}:{backgroundColor:"#292522"}}
            className='Add'disabled={!item.inStock}>{!item.inStock ? "Out of stock ":"Add to Cart"} </button>)
          }
       
          
        </div>
          
      
      </div>
    </div>
  </div>
  )
}

export default Catcard
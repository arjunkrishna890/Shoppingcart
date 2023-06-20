import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';
import { CartState } from '../../Context/Context';
import { AiFillDelete } from 'react-icons/ai';
import Rating from '../../Component/Rating/Rating';
import Subtotal from '../../Component/Subtotal/Subtotal';


function Cart() {
  const {state :{cart},dispatch} = CartState();
  const [total,setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
  },[cart])


  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Cart</h1>
        </div>
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
          
        
            {
              cart.map((item=>(
                <tr>
                    <td><img src={item.image} style={{width:"30%"}}/></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><Rating rating={item.ratings}/></td>
                    <td>
                    <select style={{color: 'white',backgroundColor: "#808080",width:"5rem"}}
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: item.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(item.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                  </td>
                    <td> <AiFillDelete color='#e21b5a' size={20}style={{marginLeft:"15px"}} onClick={()=>dispatch({ type:"Remove_from_cart",payload:item})}/></td>
                </tr>
                
              )))
            }
         
            
      
          
        </table>

        
      </div>
     <Subtotal total={total}/>
    </div>
   
  )
}

export default Cart
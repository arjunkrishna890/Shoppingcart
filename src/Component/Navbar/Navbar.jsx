import React from 'react'
import './Navbar.scss';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from '../../Context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Navbar() {
  const {state :{cart},dispatch,productDispatch} = CartState()
console.log(cart)
    const[open,setOpen]= useState(false);
  return (
    <div className='navbar'>
        <div className="container">
        <div className='logo'>
          <Link to='/' style={{textDecoration:"none",color:"#e21b5a"}}>
          <span className='text'>Shopping Cart</span>
          </Link>
            
            
          </div>
          <div className="search">
                    <div className='searchinput'> 
                        <input type='text' placeholder='Search the  product' 
                        onChange={(e)=>{productDispatch({type:"FILTER_BY_SEARCH",
                        payload:e.target.value,})}}/>
                    </div>
            <button>Search</button>
           
            </div>
           <div className='cart'>
           <FaShoppingCart onClick={()=>setOpen(!open)} size={25} style={{marginTop:"1rem"}} color='white'  />
            <div className="user" >
                {
                open &&
                <div className="options">
               {
                cart.length >0
                ?(<>

                <div >
                  {
                    cart.map((item)=>{
                     return(
                      <div>
                           <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                        <img src={item.image} style={{width:"50px",height:"5  `0px",borderRadius:"80%"}}/>
                        <div>
                          <p style={{marginLeft:"10px"}}>{item.name}</p>
                          <p style={{marginLeft:"10px"}}>{item.price}</p>
                        </div>
                        
                        <AiFillDelete color='#e21b5a' size={20}style={{marginLeft:"15px"}} onClick={()=>dispatch({ type:"Remove_from_cart",payload:item})}/>
                      </div>
                      
                      </div>
                     
                     )
                    })
                  }

                </div>
                <Link to='/cart'>
                        <button > Go to Cart</button>
                </Link>
                </>)
                :(<>Card is empty</>)
               }
             
                </div>
                }
              </div>
              {cart.length}
           </div>
            
              
        </div>
    </div>
  )
}

export default Navbar
import React from "react";
import "./Filter.scss";
import { useState } from "react";
import Rating from "../Rating/Rating";
import { CartState } from "../../Context/Context";

const Filter = () => {
  
  const {productState:{byStock,byfastDelivery,sort,byRating,searchQuery},productDispatch} = CartState()
  console.log(byStock,byfastDelivery,sort,byRating,searchQuery)
  return (
    <div className="filter">
      <span className="filter-title">Filter Products</span>
      <span>

        <input type="radio" id={`inline-1`} name="group1" onChange={()=> productDispatch({
          type:"SORT_BY-PRICE",
          payload:"lowtoHigh"
        })
        } value="ascending" checked={sort==='lowtoHigh'?true:false}/> 


        <label for="ascending">Ascending</label> <br />
      </span>

      <span>


      <input type="radio" id={`inline-1`} name="group1" onChange={()=> productDispatch({
          type:"SORT_BY-PRICE",
          payload:"Hightolow"
        })
        } value="ascending" checked={sort==='Hightolow'?true:false}/> 

        <label for="descending">Descending</label>



      </span>
      <span>
        <input type="checkbox" id={`inline-3`} name="group1" onChange={()=>productDispatch({
          type:"FILTER_BY-STOCK"
        })}
        checked={byStock}/>

        <label for="">Include out of stock</label>
      </span>
      <span>


        <input type="checkbox" id={`inline-4`} name="group1" onChange={()=>productDispatch({
          type:"FILTER_BY_DELIVERY"
        })} checked={byfastDelivery}/>

        <label for=""> Fast delivery only</label>
      </span>


      <span>
        <label for=""> Rating</label>
        <Rating rating={byRating} onClick={(i)=>productDispatch({
          type:"FILTER_BY_RATING",
          payload:i+1
        })
        } style={{cursor:"pointer"}}/>
        
      </span>
      <br></br>
      <button  onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        } >Clear Filters</button>
    </div>
  );
};

export default Filter;
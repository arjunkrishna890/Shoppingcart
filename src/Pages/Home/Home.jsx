import React from 'react';
import { CartState } from '../../Context/Context';
import Catcard from '../../Component/Catcard/Catcard';
import './Home.scss';
import Filter from '../../Component/Filter/Filter';
function Home() {
    const {
    state : {products},
    productState:{byStock,byfastDelivery,sort,byRating,searchQuery},
  } = CartState();
  const transformedProducts = ()=>{
    let sortedproducts = products;
    if(sort){
      sortedproducts = sortedproducts.sort((a,b)=>sort==="lowtoHigh"?a.price-b.price:b.price-a.price)
    }
    if(byStock){
      sortedproducts = sortedproducts.filter((item)=>item.inStock)
    }
    if(byfastDelivery){
      sortedproducts = sortedproducts.filter((item)=>item.fastDelivery)
    }
    if (byRating) {
      sortedproducts = sortedproducts.filter(
        (prod) => prod.ratings == byRating
      );
    }
    if (searchQuery) {
      sortedproducts = sortedproducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedproducts
  }


  return (
    
    <div className='Home'>
        <Filter/>
        <div className="productcontainer">
            {transformedProducts().map((item)=>{
                return(
                <Catcard item={item} key={item.id}/>
                )
            })}
        </div>
    </div>
  )
}

export default Home
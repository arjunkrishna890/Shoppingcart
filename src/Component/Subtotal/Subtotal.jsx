import React from 'react'
import './Subtotal.scss'

function Subtotal({total}) {
  return (
    <div className="sub">
    <span className="filter-title">Subtotal</span>
    <h1>{total} $</h1>
    <button>Go to Payment</button>
   
    
    
    <br></br>

  </div>
  )
}

export default Subtotal
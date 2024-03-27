import React from 'react'
import { FiActivity } from "react-icons/fi";

const PricesCard = ({currency}) => {
// Receiving currency data by passing props from Prices component
  return (
    
    <div className="prices-card">
        <div className="top_section_prices">
            <p> <span dangerouslySetInnerHTML={{__html: currency.symbol}} /></p>
            <h2> {currency.code}</h2>
        </div>
        <div className="middle_section_prices">
            <h3>{currency.description}</h3>
            <p className='rate' ><FiActivity  /> {currency.rate}</p>
            <p>Rate Float: {currency.rate_float}</p>
        </div>
    </div>
  )
}

export default PricesCard
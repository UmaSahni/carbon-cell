import React, { useEffect, useState } from 'react'
import PricesCard from './PricesCard'
import { getData } from './Graph'

const Prices = () => {
const [data, setData] = useState({})

useEffect(()=>{
    getData("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((res)=>res.json())
    .then((data)=>setData(data.bpi))
    .catch((err)=>console.log(err))
},[])

  return (
    <div className='prices-card-container' >
        {/* Loop through data object */}
        {Object.keys(data).map((key) => (
        <PricesCard key={key} currency={data[key]} />
      ))}
        
    </div>
  )
}

export default Prices
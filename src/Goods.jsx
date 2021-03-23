import React from 'react'
import style from './css/Goods.module.css'
import ProdCard from './ProdCard.jsx'
import data from './data.js'

function Goods(){
    return(
    <div className={style.block}>
            {
                data.goods.map(prod => <ProdCard name={prod.name} img={prod.img} price={prod.price} rating={prod.rating} amount={prod.amount}/>)
            }
      </div>
    )
}

export default Goods
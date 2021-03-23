import React from 'react'
import style from './css/Goods.module.css'
import ProdCard from './ProdCard.jsx'

function Cosmetics(){
    return(
        <div>
           <h2>Косметика</h2>
            <div className={style.block}>
                <ProdCard name="Тушь" img="https://images.wbstatic.net/c252x336/new/2990000/2995425-2.jpg" price="399 рублей" rating="9/10" amount="35"/>
                <ProdCard name="Крем" img="https://images.wbstatic.net/c252x336/new/5280000/5281601-1.jpg" price="299 рублей" rating="8/10" amount="68"/>
                <ProdCard name="Гель" img="https://images.wbstatic.net/c252x336/new/10220000/10228865-1.jpg" price="999 рублей" rating="9/10" amount="57"/>
                <ProdCard name="Туалетная вода" img="https://images.wbstatic.net/c252x336/new/1710000/1713429-1.jpg" price="3 999 рублей" rating="8/10" amount="102"/>
                <ProdCard name="Зубная паста" img="https://images.wbstatic.net/c252x336/new/11420000/11428790-1.jpg" price="599 рублей" rating="9/10" amount="79"/>
                <ProdCard name="Кассета для бритв" img="https://images.wbstatic.net/c252x336/new/2140000/2147738-1.jpg" price="599 рублей" rating="8/10" amount="73"/>
                <ProdCard name="Маска" img="https://images.wbstatic.net/c252x336/new/6830000/6834098-1.jpg" price="799 рублей" rating="7/10" amount="85"/>
            </div>
        </div>
    )   
}

export default Cosmetics
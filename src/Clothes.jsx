import React from 'react'
import style from './css/Goods.module.css'
import ProdCard from './ProdCard.jsx'

function Clothes(){
    return(
        <div>
           <h2>Одежда</h2>
            <div className={style.block}>
                <ProdCard name="Костюм" img="https://images.wbstatic.net/c252x336/new/2950000/2950421-1.jpg" price="7 999 рублей" rating="9/10" amount="35"/>
                <ProdCard name="Мантия" img="https://images.wbstatic.net/c252x336/new/11000000/11005600-1.jpg" price="2 999 рублей" rating="8/10" amount="68"/>
                <ProdCard name="Футболка" img="https://images.wbstatic.net/c252x336/new/4050000/4051518-1.jpg" price="999 рублей" rating="9/10" amount="57"/>
                <ProdCard name="Куртка" img="https://images.wbstatic.net/c252x336/new/18160000/18164021-1.jpg" price="20 999 рублей" rating="8/10" amount="102"/>
                <ProdCard name="Толстовка" img="https://images.wbstatic.net/c252x336/new/4930000/4935419-1.jpg" price="2 999 рублей" rating="9/10" amount="79"/>
                <ProdCard name="Куртка" img="https://images.wbstatic.net/c252x336/new/7070000/7072533-1.jpg" price="5 999 рублей" rating="8/10" amount="73"/>
                <ProdCard name="Брюки" img="https://images.wbstatic.net/c252x336/new/18780000/18786602-1.jpg" price="2 999 рублей" rating="7/10" amount="85"/>
            </div>
        </div>
    )   
}

export default Clothes
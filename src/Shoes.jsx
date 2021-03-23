import React from 'react'
import style from './css/Goods.module.css'
import ProdCard from './ProdCard.jsx'

function Shoes(){
    return(
        <div>
           <h2>Обувь</h2>
            <div className={style.block}>
                <ProdCard name="Ботильоны" img="https://images.wbstatic.net/small/new/6510000/6519906.jpg" price="3 999 рублей" rating="9/10" amount="78"/>
                <ProdCard name="Ботинки" img="https://images.wbstatic.net/small/new/13410000/13419326.jpg" price="2 999 рублей" rating="8/10" amount="68"/>
                <ProdCard name="Кроссовки" img="https://images.wbstatic.net/small/new/14650000/14652578.jpg" price="4 999 рублей" rating="9/10" amount="57"/>
                <ProdCard name="Ботфорты" img="https://images.wbstatic.net/small/new/4800000/4807504.jpg" price="7 999 рублей" rating="8/10" amount="102"/>
                <ProdCard name="Сабо" img="https://images.wbstatic.net/small/new/10960000/10964683.jpg" price="3 999 рублей" rating="8/10" amount="79"/>
                <ProdCard name="Шлепанцы" img="https://images.wbstatic.net/small/new/5290000/5295091.jpg" price="2 999 рублей" rating="7/10" amount="259"/>
                <ProdCard name="Резиновые сапоги" img="https://images.wbstatic.net/small/new/9940000/9942146.jpg" price="1 999 рублей" rating="9/10" amount="148"/>
            </div>
        </div>
    )   
}

export default Shoes
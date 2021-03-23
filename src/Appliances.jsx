import React from 'react'
import style from './css/Goods.module.css'
import ProdCard from './ProdCard.jsx'

function Appliances(){
    return(
        <div>
           <h2>Бытовая техника</h2>
            <div className={style.block}>
                <ProdCard name="Робот-пылесос" img="https://images.wbstatic.net/small/new/14440000/14444933.jpg" price="11 999 рублей" rating="9/10" amount="115"/>
                <ProdCard name="Машинка для стрижки" img="https://images.wbstatic.net/small/new/2240000/2242872.jpg" price="3 999 рублей" rating="8/10" amount="68"/>
                <ProdCard name="Электрический чайник" img="https://images.wbstatic.net/c252x336/new/20880000/20882882-1.jpg" price="1 999 рублей" rating="9/10" amount="57"/>
                <ProdCard name="Кофемашина" img="https://images.wbstatic.net/c252x336/new/12960000/12968083-3.jpg" price="24 999 рублей" rating="10/10" amount="102"/>
                <ProdCard name="Ломтерезка" img="https://images.wbstatic.net/c252x336/new/19220000/19223822-1.jpg" price="3 999 рублей" rating="8/10" amount="79"/>
                <ProdCard name="Вафельница" img="https://images.wbstatic.net/c252x336/new/4720000/4724110-1.jpg" price="1 999 рублей" rating="7/10" amount="259"/>
                <ProdCard name="Гриль" img="https://images.wbstatic.net/c252x336/new/3910000/3912338-2.jpg" price="8 999 рублей" rating="9/10" amount="148"/>
            </div>
        </div>
    )   
}

export default Appliances
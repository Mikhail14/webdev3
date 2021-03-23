import React from 'react'
import {Route} from 'react-router-dom'
import Grid from './Grid.jsx'
import Goods from './Goods.jsx'
import Clothes from './Clothes.jsx'
import Appliances from './Appliances.jsx'
import Cosmetics from './Cosmetics.jsx'
import Shoes from './Shoes.jsx'

function Content(){
    return(
        <div>
            <Route path="/goods" component={Goods} />
            <Route path="/grid" component={Grid} />
            <Route path="/clothes" component={Clothes} />
            <Route path="/appliances" component={Appliances} />
            <Route path="/cosmetics" component={Cosmetics} />
            <Route path="/shoes" component={Shoes} />
        </div>
    )
}

export default Content
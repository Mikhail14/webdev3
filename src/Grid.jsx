import React from 'react'
import style from './css/Grid.module.css'
import data from './data.js'

function Grid(){
    return(
        <div className={style.block}>
           
            {
                data.grid.map(img => <img src={img} alt=""/>)
            }
        
        </div>
    )
}

export default Grid
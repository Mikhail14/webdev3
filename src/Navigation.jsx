import React from 'react'
import style from './css/Navigation.module.css'
import {NavLink} from 'react-router-dom'

function Navigation(){
    return(
        
        <div className={style.block}>
           
           <ul>
              <li>
                    <NavLink to="/goods">Главная</NavLink>
              </li>
               <li>
                    <NavLink to="/grid">Акции</NavLink>
               </li>
               <li>
                    <NavLink to="/clothes">Одежда</NavLink>
               </li>
               <li>
                    <NavLink to="/shoes">Обувь</NavLink>
               </li>
               <li>
                    <NavLink to="/appliances">Бытовая техника</NavLink>
               </li>
               <li>
                    <NavLink to="/cosmetics">Косметика</NavLink>
               </li>
           </ul>
            
        </div>
        
    )
}

export default Navigation
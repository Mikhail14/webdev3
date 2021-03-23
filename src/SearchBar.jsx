import React from 'react'
import style from './css/SearchBar.module.css'

function SearchBar(){
    return(
     <div className={style.block}>
         <input type="text"/>
         <button>Найти</button>
     </div>
    )
}

export default SearchBar
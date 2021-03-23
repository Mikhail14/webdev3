import React from 'react'
import logo from './logo.svg'
import style from './css/HeaderApp.module.css'


function HeaderApp(){
    return(
    <header className={style.block}>
       
        <img src={logo} className="App-logo" alt="logo" /> 
        
        <h1>Моё первое веб-приложение на ReactJS</h1>
        
        <p>
            Меня зовут Иван Иванов. Мне 14 лет. Я освоил такие элементы программирования, как: HTML, CSS и JavaScript. Сегодня я создал своё первое веб-приложение на ReactJS. Также, люблю программировать в Unity, Roblox и Python, играя при этом в Minecraft.
        </p>
      
    </header>
    )
}

export default HeaderApp
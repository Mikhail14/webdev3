import React from 'react'
import style from './css/Login.module.css'

function Login(){
    return(
        <div className={style.block}>
            <h2>Войти в личный кабинет</h2>
            <p>Логин:</p>
            <input type="text"/>
            <p>Пароль:</p>
            <input type="text"/>
            <br/>
            <button>Войти</button>
        </div>
    )
}

export default Login
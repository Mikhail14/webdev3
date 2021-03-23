import React from 'react'
import tovar from './tovar.jpg'
import style from './css/ProdCard.module.css'

class ProdCard extends React.Component{
    
    constructor(){
        super()
        
        this.state = {
            count: 0
        }
        
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
        this.clear = this.clear.bind(this)
    }

    plus(){
        this.setState({
            count: ++this.state.count
        })
    }
    
    minus(){
        if(this.state.count > 0){
           this.setState({
                count: --this.state.count
           })
        }   
    }  
    
    clear(){
        if(this.state.count > 0){
           this.setState({
                count: 0
           })
        }   
    }  
    
    render(){
        
        let props = this.props
        
        return(
            <div className={style.block}>
                <h3>{props.name}</h3>
                <img src={props.img} alt=""/>
                <p>Цена: {props.price}</p>
                <p>Рейтинг: {props.rating}</p>
                <p>На складе: {props.amount} шт.</p>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
                <button onClick={this.clear}>Очистить</button>
                <p className={style.counts}>{this.state.count}</p>
            </div>
        )
    }
}

export default ProdCard
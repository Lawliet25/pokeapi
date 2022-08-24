import React from 'react';

export default class Estado extends React.Component{
    constructor(){
        super();
        this.state={
            contador:0
        }
        /*setInterval(()=>{
            this.setState({
                contador:this.state.contador+1
            });
        },1000)*/
        this.sumar=this.sumar.bind(this);
        this.restar=this.restar.bind(this);
    }
    sumar(e){
       
        this.setState({
            contador:this.state.contador+1
        });
    }
    restar(e){
        this.setState({
            contador:this.state.contador-1
        });
    }
    render(){
        return(
            <div> 
            <h1>Variables de estado y eventos</h1>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>    
            <h1>{this.state.contador}</h1>
            </div>      
        )
    };
}
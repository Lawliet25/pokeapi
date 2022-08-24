import React from 'react';

export default class EstadoES7 extends React.Component{
    
    state={
        contador:0
    }

    sumar=(e)=>{
        this.setState({
            contador:this.state.contador+1
        });
    }
    restar=(e)=>{
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
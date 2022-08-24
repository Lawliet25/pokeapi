import React from 'react';

export default class CicloVida extends React.Component{
constructor(){
    super();
    console.log(0,"Componente creado por primera vez");
    this.state={
        hora:new Date().toLocaleTimeString()
    }
    /*setInterval(()=>{
        this.setState({
            hora:new Date().toLocaleTimeString()
        });
    },5000)*/
    this.timer=null;
}
componentDidMount(){
    console.log(1,"Componente renderizado por primera vez");
}
iniciar=(e)=>{
    this.timer=setInterval(()=>{
        this.setState({
            hora:new Date().toLocaleTimeString()
        });
    },1000)
}
detener=(e)=>{
    clearInterval(this.timer);
}
render(){
    console.log(2,"Componente actualizado por el cambio de una propiedad o una variable de estado");
    return(
        <div>
            <h1>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
                {this.state.hora}
            </h1>
        </div>
    );
}
}
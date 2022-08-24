import React from "react";

class ComponenteC extends React.Component{
    render(){
        return <h2>Soy un componente tipo clase. {this.props.msg}</h2>
    }
}
export default ComponenteC;
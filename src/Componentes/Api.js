import React, { useState, useEffect } from 'react';
import './Api.css';

const Pokemones = () => {
    
    const [pokemones, setPokemones] = useState([]);
    
    useEffect(()=>{
        async function obtenerPokes(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();

            setPokemones(data.results);
            console.log(pokemones)
        }
        obtenerPokes();
    },[])
    
    
    return (
        <div className='pokes'>
        
        <table>
            <th>LISTADO DE POKEMONES</th>
        {pokemones.map((pokemon,index)=>{
            return <tr key={index}><td>{pokemon.name}</td></tr>
        })}
        </table>
       
       
       </div>
       
    )
}

export default Pokemones
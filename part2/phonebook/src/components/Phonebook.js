import React from 'react' 
import phoneService from './services/phones'


const Phonebook=({name,number,did})=>{
    return(
        <p>{name} {number} 
        <button>delete</button></p>
    )
}



export default Phonebook
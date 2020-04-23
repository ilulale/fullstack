import React from 'react' 
import phoneService from './services/phones'
import App from './App'


const Phonebook=({name,number,did})=>{
    return(
        <p>{name} {number} 
        <button onClick={()=>ohrio(did)}>delete</button></p>
    )
}

const ohrio = delid =>{
    phoneService
    .delrio(delid)
    .then(window.alert('deleted!'))
}

export default Phonebook
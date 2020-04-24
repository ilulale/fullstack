import React, { useState, useEffect } from 'react'
import phoneService from './services/phones'
import Form from './Form'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  useEffect(()=>{
    phoneService
    .getAll()
    .then(response=>{
      setPersons(response.data)
    })
  },[])

  const addNumber=(event)=>{
    event.preventDefault()
    const phoneObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if(persons.some(person=>person.name===newName)){
      window.alert(`${newName} already exists`)}
    else{
      setPersons(persons.concat(phoneObject))
      phoneService
      .create(phoneObject)
      .then(response=>{
          window.alert(`${phoneObject.name} added to db`)
      })
      setNewName('')
      setNewNumber('')
    }
   
  
  }

  const handleName=(event)=>{
    setNewName(event.target.value)
  }
  const handleNumber=(event)=>{
    setNewNumber(event.target.value)
  }


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
    setPersons(persons.filter(person=>person.id!==delid))
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addNumber={addNumber} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      {persons.map(persons=>
        <Phonebook name={persons.name} number={persons.number} key={persons.id} did={persons.id}/>)}

    </div>
  )
}

export default App
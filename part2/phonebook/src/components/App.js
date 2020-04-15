import React, { useState } from 'react'
import Phonebook from './Phonebook'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '999911119999',
      id: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
  


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleName}/>
          number: <input value={newNumber} onChange={handleNumber}/>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons=>
        <Phonebook name={persons.name} number={persons.number} key={persons.id}/>)}
    </div>
  )
}

export default App
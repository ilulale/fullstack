import React, { useState } from 'react'
import Phonebook from './Phonebook'
import Form from './Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456',id:1 },
    { name: 'Ada Lovelace', number: '39-44-5323523',id:2 },
    { name: 'Dan Abramov', number: '12-43-234345',id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122',id:4 }
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
      <Form addNumber={addNumber} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      {persons.map(persons=>
        <Phonebook name={persons.name} number={persons.number}/>)}

    </div>
  )
}

export default App
import React from 'react'

const Form =({addNumber,newName,handleName,newNumber,handleNumber})=>{
    return(
      <form onSubmit={addNumber}>
      <div>
        name: <input value={newName} onChange={handleName}/>
        number: <input value={newNumber} onChange={handleNumber}/>
        <button type="submit">add</button>
      </div>
    </form>
    )
  }
  
  export default Form
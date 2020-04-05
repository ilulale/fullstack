import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) =>{
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const total=good+bad+neutral
  const percent=(good/total)*100
  const average = (good+(bad*-1))/3
  if (total===0){
    return(
      <p>Click button to generate stats</p>
    )
  }
  else{
  return(
    <div>
    <h2>Statistics</h2>
    <table>
      <tbody>
      <tr>
        <td>good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{average}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{percent}</td>
      </tr>
      </tbody>
    </table>
    </div>
  )}
}

const Button = (props) => {
  const fun=props.fun
  const name=props.name
  return(
    <button onClick={fun}>{name}</button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button fun={()=>setGood(good+1)} name='good' />
      <Button fun={()=>setNeutral(neutral+1)} name='neutral' />
      <Button fun={()=>setBad(bad+1)} name='bad' />
      <br></br><br></br>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
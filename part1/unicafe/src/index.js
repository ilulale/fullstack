import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Stat = (props) =>{
  const name= props.name
  const nameval=props.val
  const total = props.total
  if(total===0){
    return(
      <p>Click button to generate stats</p>
    )
  }else{
    return(
      <Statistics name={name} val={nameval} />
    )
  }
}

const Statistics = (props) =>{
 const name = props.name
 const nameval = props.val
 return(
   <p>{name}:{nameval}</p>
 )
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
  const total=good+bad+neutral
  const percent=(good/total)*100
  const average = (good+(bad*-1))/3

  return (
    <div>
      <h1>give feedback</h1>
      <Button fun={()=>setGood(good+1)} name='good' />
      <Button fun={()=>setNeutral(neutral+1)} name='neutral' />
      <Button fun={()=>setBad(bad+1)} name='bad' />
      <br></br><br></br>
      <Stat name='good' val={good} total={total} />
      <Stat name='neutral' val={neutral} total={total} />
      <Stat name='bad' val={bad} total={total} />
      <Stat name='average' val={average} total={total} />
      <Stat name='positive' val={percent} total={total} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
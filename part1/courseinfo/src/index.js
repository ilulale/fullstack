import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  const heading = props.name
  return(
    <div>
      <h1>{heading}</h1>
    </div>
  )
}

const Part = (props) =>{
  const exercise = props.exercise
  const num = props.num
  return(
    <div>
      <p>{exercise} {num}</p>
    </div>
  )
}

const Total = (props) =>{
  const tot = props.tot
  return(
    <div>
      <p>Number of exercises {tot}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Part exercise={course.parts[0].name} num={course.parts[0].exercises} />
      <Part exercise={course.parts[1].name} num={course.parts[1].exercises} />
      <Part exercise={course.parts[2].name} num={course.parts[2].exercises} />
      <Total tot={course.parts[2].exercises+course.parts[1].exercises+course.parts[0].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) =>{
  const course=props.course

  const Header = (props) => {
    const heading = props.name
    return(
      <div>
        <h1>{heading}</h1>
      </div>
    )
  }

  const Content = (props) =>{
    const name=props.name
    const exercises=props.exercises
    return(
      <div>
        <p>{name} {exercises}</p>
      </div>
    )
  }

  const Total = ({total}) =>{
    return(
      <p>Total is {total}</p>
    )
  }  

  let total=0
  return(
    <div>
      <Header name={course.name} />
      {course.parts.map(part=>
      <Content name={part.name} exercises={part.exercises} key={part.id} />      
      )}
      {course.parts.map(part=>{
        total+=part.exercises
      })}
      <Total total={total} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
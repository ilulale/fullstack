import React from 'react'

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

  export default Course
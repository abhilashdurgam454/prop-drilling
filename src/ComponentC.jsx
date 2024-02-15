import React from 'react'

const ComponentC = ({name}) => {
  return (
    <div>
       <h1>props are coming from parent component {name}</h1>
    </div>
  )
}

export default ComponentC
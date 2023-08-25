import React from "react"

interface personProps 
{
    name :{
        firstName:string,
        lastName:string,
    }
}
const Person = (props:personProps) => {
  return (
    <div>
         <h2>{props.name.firstName}</h2>
         <h2>{props.name.lastName}</h2>
    </div>
  )
};

export default Person

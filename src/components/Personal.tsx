import React from "react"

interface personalProps
{
    name:string,
    age:number,
    islogged:boolean;
}
const Personal = (props:personalProps) => {
  return (
    <div>
        <h2>{props.islogged ?`Welcome ${props.name}`:'Sorry'}</h2>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
    </div>
  )
};

export default Personal

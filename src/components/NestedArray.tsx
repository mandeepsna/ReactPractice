import React from "react";

interface singleProps {
  nestedObject: {
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
      state: string;
    };
    hobbies:string[];
  };
}

// interface nestedProps {
//   nestedObject: nameAge;
// }

// interface Address {
//   street: string;
//   city: string;
//   state: string;
// }

// interface nameAge {
//   name: string;
//   age: number;
//   address: Address;
//   hobbies: string[];
// }

const NestedArray = (props: singleProps) => {
  return (
    <div>
      <h2>{props.nestedObject.address.state}</h2>
      <h2>{props.nestedObject.address.city}</h2>
      <h2>{props.nestedObject.name}</h2>
    </div>
  );
};

export default NestedArray;

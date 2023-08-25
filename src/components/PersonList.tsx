import React from "react";

interface PersonalDetails {
  name: string;
  address: Address;
}

interface Address {
  city: string;
  state: string;
}

interface Details {
  empid: number;
  name: string;
  age: number;
}

interface PersonProps {
  details: number[];
  detailsobj: Details[],
  personaldetails: PersonalDetails
}

const PersonList: React.FC<PersonProps> = (props) => {
  return (
    <div>
    
      {/* <h3>{props.personaldetails.address.state}</h3> */}
      {/* <h2>{props.details}</h2> */}
      {/* <h3>{props.details.map((element)=>
        {
           return <div> {element.empid}
                        {element.age}
                        {element.name} 
                      
           </div>
                
        })}</h3> */}
    </div>
  );
};

export default PersonList;

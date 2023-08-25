import NestedArray from "./components/NestedArray";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Personal from "./components/Personal";


function App() {
  const personDetails=
  {
    firstName:'Mandeep',
    lastName:'Handa'
  }

  const Details= [
    { empid:101, name:'Mandeep',age:35 },
    { empid:102, name:'Mandeep',age:25 },
    { empid:103, name:'Mandeep',age:45 },
  ]
  const personDetails1 =
  {
       name:'Komal',
       address:{
         city:'Ambala',
         state:'Haryana'
       }
  }
  const data=[10,2030,40];


  const nestedObject = {
    name: "Vishal Kukreja",
    age: 32,
    address: {
      street: "123 Mumbai fashion St",
      city: "Midtown",
      state: "MH",
    },
    hobbies: ["reading", "drawing", "gardening"],
  };


  return (
    <div >
       {/* <Personal name='Mandeep' age={35} islogged={true}></Personal>
       <Person name={personDetails}></Person> */}
       {/* <PersonList details={data} detailsobj={Details} personaldetails={personDetails1} /> */}
       <NestedArray nestedObject={nestedObject}></NestedArray>
    </div>
  );
}

export default App;

import PropTypes from "prop-types"
import { useState } from "react";
//Crea un componente PersonCard con las propiedades firstName, lastName, age, y hairColor
function PersonCard(props) {
  const [age, setAge] = useState(props.age)
  const increaseAge = () => {
    setAge(age + 1);
  }
    return (
      <div className="bg-white shadow-md rounded-lg p-4 m-4">
        <h1 className="text-2xl font-bold">
          {props.lastName}, {props.firstName}
        </h1>
        <p>Age: {age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increaseAge}>Birthday Button for {props.firstName} {props.lastName}</button>
       
      </div>
    )
  }
  PersonCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hairColor: PropTypes.string.isRequired,
  };
  

export default PersonCard
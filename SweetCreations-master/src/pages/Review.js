import "./Home.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function Review() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );


  return (
    <form onSubmit={handleSubmit}>
    <br></br>
    <br></br>
    <h1>Leave A Review!</h1>
      <label>Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
          <br></br>
    <br></br>
      </label>

      <label>
         Review:<br></br>
         <textarea rows="4" cols="50" 
          type="text" 
          name="review" 
          value={inputs.review || ""}
          onChange={handleChange}
        />      
            <br></br>
    <br></br>
       </label>
        <input type="submit" />
    </form>
  )
}

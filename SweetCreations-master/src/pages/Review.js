import "./Home.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function Review() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <h1>Leave A Review!</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>
      <label>
        Review:<br></br>
        <textarea rows="4" cols="50">
          Leave your review of the recipe here and click submit!
        </textarea>
      </label>
      <br></br>
      <br></br>
      <input type="submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Review />);

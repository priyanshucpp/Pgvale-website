import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => handleForm(e)}>
          <div className="input-container">
            <label htmlFor="phone">Enter Phone No.</label>
            <input type="text" name="phone_no" id="phone" />
          </div>

          <div className="input-container">
            <label htmlFor="fname">Enter First Name</label>
            <input type="text" name="first_name" id="fname" />
          </div>

          <div className="input-container">
            <label htmlFor="lname">Enter Last Name</label>
            <input type="text" name="last_name" id="lname" />
          </div>

          <div className="input-container">
            <label htmlFor="gender">Enter gender</label>
            <input type="text" name="gender" id="gender" />
          </div>

          <div className="input-container">
            <label htmlFor="email">Enter email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="input-container">
            <label htmlFor="location">Enter location</label>
            <input type="text" name="location" id="location" />
          </div>

          <input type="submit" />
        </form>{" "}
      </div>
    </>
  );
}

export default App;

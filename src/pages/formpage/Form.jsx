import React from "react";
import { useState , useEffect } from "react";
const initialValue = {
  username: "",
  password: "",
  email: "",
  phoneno: "",
  fav_language: ""
};

const FormPage = () => {
  const [userdata, setUser] = useState(initialValue);
  const [dropdown, setdropdown] = useState([]);
  const { username, password, email, phoneno } = userdata;
  const onValueChange = (e) => {
    // console.log(">>>>", e)
    // console.log(">>>>nameee", e.target.name)
    // console.log(">>>>valuuee", e.target.value)
    setUser({ ...userdata, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log(userdata);
  };
  useEffect(() => {
    // api 
    setdropdown(["hello" , "api"])
  }, [])
  
  return (
    <div>
      <form>
        <div className="user-box">
          <input
            type="text"
            onChange={(e) => onValueChange(e)}
            name="username"
            value={username}
          />
          <label>UserName</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
          <label>EmailID</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            onChange={(e) => onValueChange(e)}
            name="password"
            value={password}
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="tel"
            onChange={(e) => onValueChange(e)}
            name="phoneno"
            value={phoneno}
          />
          <label>Phone No:</label>
        </div>
        <p>Please select your favorite Web language:</p>
        {" "}
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="HTML"
          // checked
          onChange={(e) => onValueChange(e)}
        />
        <label for="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS"
          onChange={(e) => onValueChange(e)}
        />
        <label for="css">CSS</label>
        <br />
        {" "}
        <input
          type="radio"
          id="javascript"
          name="fav_language"

          onChange={(e) => onValueChange(e)}
          value="JavaScript"
        />
         <label for="javascript">JavaScript</label>

        <div>
          <label for="cars">Choose a car:</label>
              <select name="cars" id="cars">
                {/* <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option> */}
                {dropdown.length > 1 ? dropdown.map((data,i)=>(
                <option value="opel">{data}</option>
                )) : ""}
              </select>
        </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* <button> */}
        <button onClick={() => onSubmit()} style={{border:"2px" , padding:"5px"  }}>
          Register
        </button>
          {/* </button> */}
      </form>
    </div>
  );
};

export default FormPage;

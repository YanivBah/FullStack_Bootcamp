import axios from "axios";
import React, {useRef, useState} from "react";
import { Link, Redirect } from 'react-router-dom'

const Signup = ({ userData }) => {
  const { user, setUser } = userData;
  const [redirect, setRedirect] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const handleLogin = async () => {
    const body = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    try {
      const data = await axios.post("/signup", body);
      if (data.status === 201) setRedirect("/");
    } catch (e) {
      console.log(e.response.data);
    }
  }

  return (
    <div className="box">
      {redirect && <Redirect to={redirect}/>}
      <div>
        <h1>Signup</h1>
        <p>
          <Link to="/">Or signin here</Link>
        </p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <button onClick={handleLogin}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;

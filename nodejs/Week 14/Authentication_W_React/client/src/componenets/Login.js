import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, Redirect } from 'react-router-dom'

const Login = ({ userData }) => {
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
      const data = await axios.post("/login", body);
      setUser(data.data);
      setRedirect("/home");
    } catch (e) {
      console.log(e.response.data);
    }
  }

  return (
    <div className="box">
      {redirect && <Redirect to={redirect} />}
      <div>
        <h1>Login</h1>
        <p>
          <Link to="/signup">Or signup here</Link>
        </p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

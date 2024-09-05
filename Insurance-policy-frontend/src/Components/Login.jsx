import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

  const[email, setEmail] = useState();
  const[password, setPassword] = useState();

  const handleSubmit = () => {
    e.preventDefault();
    console.log("done");
  }

  return (
    <div className="login-div">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <hr/>
        <br/>
        <label htmlFor="email">Enter Email</label>
        <br/>
        <input 
          name="email" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
        <br/>
        <label htmlFor="email">Enter password</label>
        <br/>
        <input 
          name="password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        <br/>
        <button type="submit" className="btn btn-info">Login</button>
      </form>
    </div>
  )
}

export default Login

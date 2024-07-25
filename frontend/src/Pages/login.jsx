import React, { useState } from 'react'
import './CSS/Login.css'

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log(formData);
  }
  const signup = async () => {
    console.log(formData);
  }

  return (
    <div className='login'>
      <div className="login-container">
        <h1>{state}</h1>
        <div className="login-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state === "Sign Up" ?
          <p className="login-login">
            Already have an account? <span onClick={()=>{setState("Login")}}>Login here!</span>
          </p> :
          <p className="login-login">
            Create an account <span onClick={()=>{setState("Sign Up")}}>Click here!</span>
          </p>}
        <div className="login-agree">
          <input type='checkbox' name='' id='' />
          <p>BY continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login

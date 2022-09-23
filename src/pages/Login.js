import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.css'


const Login = () => {
    const [phoneno,setPhoneno] = useState("")
    const [password,setPassword] = useState("")
    const history = useNavigate();

  

    const Login = () => {
        const blog = { phoneno,password};


        fetch('http://127.0.0.1:8000/gym/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
          })
      
          .then(() => {
            history('/viewclients')
          })
          .catch((error) => {
      
              console.error('Error:', error);
          })  
      }
  // mkjkljkll
  
  return (
    <div className="form-content-right">

    <form action="" className="form">
    
      <div className="form-inputs">
        <label htmlFor="phoneno" className="form-label">
  Phone number
        </label>
        <input
        id='phoneno' type="text"
           name = 'phoneno' 
           className="form-input"
           placeholder='Enter your Phone number'
           onChange={(e) => setPhoneno(e.target.value)}
            />              

      </div>

      <div className="form-inputs">
        <label htmlFor="password" className="form-label">
Password
        </label>
        <input
        id='password' type="password"
           name = 'password' 
           className="form-input"
           placeholder='Enter your password'
     
          onChange={(e) => setPassword(e.target.value)}
            />


      </div>
      <button className="form-input-btn" onClick={Login}>Log In</button>
    </form>
  </div>  )
}

export default Login
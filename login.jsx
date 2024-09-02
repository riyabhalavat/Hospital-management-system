import React, { useState } from 'react';
import './login.css';

import { useNavigate } from 'react-router-dom';


<title>Login</title>
 const LoginPage = () =>{
  const[action,setAction] = useState("Sign Up");
  const navigate = useNavigate();
  return(
    <div className='container'>
      <div className='header'>
        <div className='text'>SignUp</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action ==="Login"?<div></div>:<div className='input'>
         
          <input type='text' placeholder='name'/>
        </div>        
}
<div className='input'>
        <input type='text'/>
        
          <input type='email'placeholder='email_id'/>
      </div>
      
        <div className='input'>
         
          <input type='password' placeholder='password'/>
          </div>
          <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>SignUp</div>
            <div className={action === "Sign Up"?"submit gray": "submit"}onClick={()=>{
              {setAction("Login")}
            }}>Login
            <button onClick={()=>navigate("/hospitalsystem")}></button>
            </div>
          </div>

    </div>
    </div>
  );
}
export default LoginPage;



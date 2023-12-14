import React from 'react'
import '../Pages/CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignnp'>
      <div className='loginsignup-countainer'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Enter Name'/>
          <input type="email" placeholder='Enter Email'/>
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox"/>
          <p>By continuing, i agree to terms of use & policy </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
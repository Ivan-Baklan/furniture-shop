'use client'

import React from 'react'
import StyledLogInForm from './LogInForm.styled'

export default function LoginForm() {
  return (
    <StyledLogInForm>
      <h3>Log In</h3>
      <label htmlFor='username'>Username or email address</label>
      <input type='text' name='username' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' />
      <label htmlFor='remember'>
        <input type='checkbox' name='remember' />
        Remember me
      </label>
      <div>
        <input type='submit' value='Log In' />
        <span>
          <a href='#'>Lost Your Password?</a>
        </span>
      </div>
    </StyledLogInForm>
  )
}

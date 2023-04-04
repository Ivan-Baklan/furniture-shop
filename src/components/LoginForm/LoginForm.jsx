'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlice'
import { StyledLogInForm, AttentionMessage } from './LogInForm.styled'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispath = useDispatch()

  const onSubmit = (data) => dispath(login(data.username, data.password))
  return (
    <StyledLogInForm onSubmit={handleSubmit(onSubmit)}>
      <h3>Log In</h3>
      <label htmlFor='username'>Username or email address</label>
      <input
        type='text'
        name='username'
        {...register('username', {
          required: 'Please enter username',
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email address',
          },
        })}
        aria-invalid={errors.username ? 'true' : 'false'}
      />
      {errors.username && (
        <AttentionMessage>{errors.username.message}</AttentionMessage>
      )}
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        {...register('password', { required: 'Please enter password' })}
        aria-invalid={errors.password ? 'true' : 'false'}
      />
      {errors.password && (
        <AttentionMessage>{errors.password.message}</AttentionMessage>
      )}
      <label htmlFor='remember'>
        <input type='checkbox' name='remember' />
        Remember me
      </label>
      <div>
        <input type='submit' value='Log In' />
        <span>
          <button type='button'>Lost Your Password?</button>
        </span>
      </div>
    </StyledLogInForm>
  )
}

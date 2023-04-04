'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  access_token: '',
  refresh_token: '',
  status: 'idle',
  token: null,
  isAuth: false,
  error: null,
}

export const login = createAsyncThunk('auth/login', async (email, password) => {
  const res = await axios.post(
    `https://169e187a-f2e6-4f73-ae3b-0ed76d652b9f.mock.pstmn.io/api/v1/auth/login`,
    {
      login: email,
      pass: password,
    },
  )
  const { access_token, refresh_token } = res.data

  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
  return res.data
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post(
    `https://169e187a-f2e6-4f73-ae3b-0ed76d652b9f.mock.pstmn.io/api/v1/auth/logout`,
  )
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.access_token = action.payload.access_token
        state.refresh_token = action.payload.refresh_token
        state.isAuth = true
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(logout.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'suceeded'
        state.token = null
        state.isAuth = false
        state.access_token = null
        state.refresh_token = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default authSlice.reducer

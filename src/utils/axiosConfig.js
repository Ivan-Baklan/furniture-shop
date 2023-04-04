'use client'

import axios from 'axios'
import refresh_Token from '../services/authServices'

const axiosInstance = axios.create({
  baseURL: 'https://169e187a-f2e6-4f73-ae3b-0ed76d652b9f.mock.pstmn.io/api/v1',
  headers: { 'Content-Type': 'aplication/json' },
})

// request interseptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  const newConfig = config

  newConfig.headers.Authorization = `Bearer ${token}`

  return newConfig
})
// response interseptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true
      return refresh_Token().then(() => {
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
          'access_token',
        )}`
        return axiosInstance(originalRequest)
      })
    }
    return Promise.reject(error)
  },
)
export default axiosInstance

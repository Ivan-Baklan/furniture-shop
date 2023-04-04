'use client'

import api from '../utils/axiosConfig'

const refresh_Token = async () => {
  try {
    const refreshToken = ''
    const { data } = await api.post('auth/refresh', {
      refreshToken,
    })
    return data
  } catch (error) {
    console.log(error)
  }
  return true
}

export default refresh_Token

'use client'

import React from 'react'

import ReactDOM from 'react-dom'

export default function CartPortal({ children }) {
  return ReactDOM.createPortal(
    <>{children}</>,
    document.getElementById('portal'),
  )
}

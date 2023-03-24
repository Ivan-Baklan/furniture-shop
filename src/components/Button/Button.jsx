'use client'

import React from 'react'

import PageButton from './Button.styled'

export default function Button({
  value,
  activeButton,
  paginationHandler,
  children,
}) {
  return (
    <PageButton
      value={value}
      active={Number(activeButton) === Number(value)}
      onClick={paginationHandler}
    >
      {children}
    </PageButton>
  )
}

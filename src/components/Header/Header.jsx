'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import StyledHeader from './Header.styled'

const Header = function ({ children }) {
  const path = usePathname()

  return <StyledHeader bgColor={path === '/'}>{children}</StyledHeader>
}

export default Header

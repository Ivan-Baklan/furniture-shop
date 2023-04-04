'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import StyledHeader from './Header.styled'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Header = function ({ children }) {
  const path = usePathname()

  return (
    <>
      <StyledHeader bgColor={path === '/'}>
        <HamburgerMenu />
        {children}
      </StyledHeader>
    </>
  )
}

export default Header

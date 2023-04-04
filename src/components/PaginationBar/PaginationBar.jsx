'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'

import { NextButton, StyledPaginationBar } from './PaginationBar.styled'

import Button from '../Button/Button'

export default function PaginationBar({ postsAmount, pageSize, page, path }) {
  const router = useRouter()
  const [activeButton, setActiveButton] = useState({
    buttonNumber: page !== undefined ? page : 1,
  })

  const pageAmount = Math.ceil(postsAmount / pageSize)
  const buttonArr = Array.from({ length: pageAmount }, (_, x) => x + 1)

  const paginationHandler = (e) => {
    if (e.target.value === 'next' && page < pageAmount) {
      router.push(`${path}/${Number(page) + 1}`)
      const newActiveButton = {
        ...activeButton,
        buttonNumber: Number(page) + 1,
      }

      setActiveButton(newActiveButton)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (e.target.value !== 'next') {
      router.push(`${path}/${e.target.value}`)
      const newActiveButton = { ...activeButton, buttonNumber: e.target.value }
      setActiveButton(newActiveButton)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <StyledPaginationBar>
      {buttonArr.map((_elem) => (
        <Button
          key={_elem}
          value={_elem}
          activeButton={activeButton.buttonNumber}
          paginationHandler={paginationHandler}
        >
          {_elem}
        </Button>
      ))}
      <NextButton value='next' onClick={paginationHandler}>
        Next
      </NextButton>
    </StyledPaginationBar>
  )
}

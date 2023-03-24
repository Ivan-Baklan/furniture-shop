'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { NextButton, StyledPaginationBar } from './PaginationBar.styled'
import Button from '../Button/Button'

export default function PaginationBar({ postsAmount, pageSize }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeButton, setActiveButton] = useState({
    buttonNumber: 1,
  })

  const pageAmount = Math.ceil(postsAmount / pageSize)
  const buttonArr = Array.from({ length: pageAmount }, (_, x) => x + 1)
  const paginationHandler = (e) => {
    const currentPage = searchParams.get('page') ? searchParams.get('page') : 1
    if (e.target.value === 'next' && currentPage < pageAmount) {
      router.replace(`/blogs?page=${Number(currentPage) + 1}`)
      const newActiveButton = {
        ...activeButton,
        buttonNumber: Number(currentPage) + 1,
      }
      console.log(newActiveButton)
      setActiveButton(newActiveButton)
    } else if (e.target.value !== 'next') {
      router.replace(`/blogs?page=${e.target.value}`)
      const newActiveButton = { ...activeButton, buttonNumber: e.target.value }
      setActiveButton(newActiveButton)
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

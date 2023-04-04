'use client'

import React from 'react'

import StyledSizeInputs from './SizeInput.styled'

export default function SizeInput({ sizeList }) {
  return (
    <StyledSizeInputs>
      <p>Size</p>
      <div>
        {sizeList.map((elem) => (
          <div key={sizeList.indexOf(elem)}>
            <input type='radio' id={elem} name='size' value={elem} />
            <label htmlFor={elem}>{elem}</label>
          </div>
        ))}
      </div>
    </StyledSizeInputs>
  )
}

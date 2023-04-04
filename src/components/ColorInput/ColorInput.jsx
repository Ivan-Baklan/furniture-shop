'use client'

import React from 'react'

import { StyledColorInputs, StyledDiv } from './ColorInput.styled'

export default function ColorInput({ colorList }) {
  return (
    <StyledColorInputs>
      <p>Color</p>
      <div>
        {colorList.map((_elem) => (
          <StyledDiv key={colorList.indexOf(_elem)} color={_elem}>
            <input type='radio' name='color' id={_elem} value={_elem} />
            <label htmlFor={_elem} />
          </StyledDiv>
        ))}
      </div>
    </StyledColorInputs>
  )
}

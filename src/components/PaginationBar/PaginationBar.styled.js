import styled from 'styled-components'

const StyledPaginationBar = styled.div`
  grid-column: 1/3;
  justify-self: center;
  display: flex;
  gap: 38px;
`

const NextButton = styled.button`
  font-weight: 300;
  font-size: 1.25rem;
  padding: 15px 28px;
  background-color: #fff9e6;
  border-radius: 10px;
  border: none;
`

export { StyledPaginationBar, NextButton }

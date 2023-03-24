import styled from 'styled-components'

const PageButton = styled.button`
  font-weight: 400;
  font-size: 1.25rem;
  padding: 15px 24px;
  background-color: ${(props) => (props.active ? '#FBEBB5' : '#fff9e6')};
  border-radius: 10px;
  border: none;
`

export default PageButton

import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 28px 0 28px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  background-color: ${(props) => (props.bgColor ? '#FBEBB5' : '#fffff')};

  @media screen and (max-width: 1000px) {
  }
`

export default StyledHeader

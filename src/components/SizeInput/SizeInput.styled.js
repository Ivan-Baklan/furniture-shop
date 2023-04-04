import styled from 'styled-components'

const StyledSizeInputs = styled.div`
  text-align: start;
  color: gray;
  margin-top: 32px;
  div {
    display: inline-block;
    input {
      margin: 0;
      height: 0;
      width: 0;
    }
    label {
      font-weight: 400;
      font-size: 0.875rem;
      margin-right: 10px;
      padding: 10px;
      border: none;
      background-color: #faf4f4;
      border-radius: 5px;
    }
    input:checked + label {
      background-color: #fbebb5;
    }
    button:focus {
      background-color: red;
    }
  }
`

export default StyledSizeInputs

import styled from 'styled-components'

const StyledColorInputs = styled.div`
  margin-top: 30px;
  text-align: start;
  color: gray;
`

const StyledDiv = styled.div`
  display: inline-block;

  label {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 10px;

    border-radius: 90px;
    background-color: ${(props) => props.color};
  }
  input {
    width: 0;
    height: 0;
    margin: 0;
    visibility: hidden;
    border: none;
  }
  input:checked + label {
    transform: scale(1.2, 1.2);
  }
`

export { StyledColorInputs, StyledDiv }

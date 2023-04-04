import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 60px;
  button {
    align-self: stretch;
    padding: 17px 48px;
    background-color: white;
    border: 1px solid #000000;
    border-radius: 15px;
  }
`

const IncDecWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #9f9f9f;
  border-radius: 10px;

  button {
    border-radius: 40px;
    padding: 20px;
    border: none;
    background-color: white;
  }

  p {
    width: 30px;
    display: inline-block;
    padding: 10px;
  }
`

export { Wrapper, IncDecWrapper }

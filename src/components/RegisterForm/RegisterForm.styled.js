import styled from 'styled-components'

const StyledRegisterForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px 109px 58px 74px;
  h3 {
    font-weight: 600;
    font-size: 2.25rem;
  }
  input[name='email'] {
    width: 80%;

    padding: 15px;
    font-size: 1.25rem;
    background: #ffffff;
    border: 1px solid #9f9f9f;
    border-radius: 10px;
  }
  label[for='email-input'] {
    margin: 36px 0 22px 0;
  }
  input[value='Register'] {
    font-weight: 400;
    padding: 17px 78px;
    background-color: white;
    border: 1px solid #000000;
    border-radius: 15px;
    &:hover {
      background-color: #d3d3d38d;
    }
    &:active {
      box-shadow: 0 0 10px #9f9f9f;
    }
  }
  @media screen and (max-width: 1000px) {
    width: auto;
    padding: 0;
  }
`

const ParagraphInfo = styled.p`
  width: 79%;
  font-weight: 300;
  text-align: justify;
  line-height: 1.5rem;
`

const ParagraphPolicy = styled.p`
  font-weight: 300;
  text-align: justify;
  line-height: 1.5rem;
  margin-bottom: 64px;
`
export { StyledRegisterForm, ParagraphInfo, ParagraphPolicy }

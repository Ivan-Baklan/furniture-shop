import styled from 'styled-components'

const StyledRegisterForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px 109px 58px 74px;
  h3 {
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
  label[for='email'] {
    margin: 36px 0 22px 0;
  }
  input[value='Register'] {
    padding: 17px 78px;
    background-color: white;
    border: 1px solid #000000;
    border-radius: 15px;
  }
  input[value='Register']:active {
    background-color: #f2f2f2;
  }
`

const EmailWarning = styled.p`
  fosnt-size: 0.875rem;
  color: #ff7a7a;
`

const ParagraphInfo = styled.p`
  width: 79%;
  text-align: justify;
  line-height: 1.5rem;
`

const ParagraphPolicy = styled.p`
  text-align: justify;
  line-height: 1.5rem;
  margin-bottom: 64px;
`
export { StyledRegisterForm, ParagraphInfo, ParagraphPolicy, EmailWarning }

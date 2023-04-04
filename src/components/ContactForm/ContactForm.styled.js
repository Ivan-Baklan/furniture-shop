import styled from 'styled-components'

const StyledContactForm = styled.form`
  width: 70%;
  justify-self: center;
  display: flex;
  flex-direction: column;

  label {
    margin: 36px 0 22px 0;

    &:first-child {
      margin: 0 0 22px 0;
    }
  }
  input[type='text'] {
    font-weight: 400;
    font-size: 1rem;
    padding: 25px 30px;
    border: 1px solid #9f9f9f;
    border-radius: 10px;
  }

  textarea {
    font-family: '__Poppins_082f2d', '__Poppins_Fallback_082f2d';
    font-weight: 400;
    font-size: 1rem;
    height: 120px;
    resize: none;
    padding: 26px 30px;
    border: 1px solid #9f9f9f;
    border-radius: 10px;
  }

  input[type='submit'] {
    align-self: flex-start;
    font-weight: 400;
    font-size: 1rem;
    padding: 12px 89px;
    margin-top: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 15px;
  }

  @media screen and (max-width: 1000px) {
    width: auto;
    justify-self: stretch;
    input[type='submit'] {
      align-self: center;
    }
  }
`

export default StyledContactForm

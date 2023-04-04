import styled from 'styled-components'

const StyledLogInForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px 109px 58px 74px;
  h3 {
    font-weight: 600;
    font-size: 2.25rem;
  }
  input[name='username'],
  input[name='password'] {
    width: 80%;

    padding: 15px;
    font-size: 1.25rem;
    background: #ffffff;
    border: 1px solid #9f9f9f;
    border-radius: 10px;
  }
  label[for='username'],
  label[for='password'] {
    margin: 36px 0 22px 0;
  }
  label[for='remember'] {
    margin: 42px 0 36px 0;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
  }
  label[for='remember'] input {
    margin: 0;

    appearance: none;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.05em solid #9f9f9f;
    border-radius: 0.15em;
    transform: translateY(0.01em);

    display: grid;
    place-content: center;
  }
  label[for='remember'] input::before {
    content: '';
    width: 0.65em;
    height: 0.65em;

    transform: scale(0);

    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #3a8df4;
  }
  label[for='remember'] input:checked::before {
    transform: scale(1);
  }
  input[value='Log In'] {
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

  div {
    width: 100%;
    display: flex;
    gap: 31px;
    align-items: center;

    button {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      font-weight: 300;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
  }
`
const AttentionMessage = styled.p`
  font-weight: 300;
  font-size: 0.875rem;
  color: #ff5b5b;
`
export { StyledLogInForm, AttentionMessage }

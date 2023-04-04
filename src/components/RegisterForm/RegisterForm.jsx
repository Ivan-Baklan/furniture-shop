'use client'

import React from 'react'

import {
  ParagraphInfo,
  ParagraphPolicy,
  StyledRegisterForm,
} from './RegisterForm.styled'

export default function RegisterForm() {
  return (
    <StyledRegisterForm>
      <h3>Register</h3>
      <label htmlFor='email-input'>Email address</label>
      <input type='text' id='email-input' name='email' />

      <ParagraphInfo>
        A link to set a new password will be sent to your email address.
      </ParagraphInfo>
      <ParagraphPolicy>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <strong> privacy policy.</strong>
      </ParagraphPolicy>
      <input type='submit' value='Register' />
    </StyledRegisterForm>
  )
}

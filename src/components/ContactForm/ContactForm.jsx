'use client'

import React from 'react'

import StyledContactForm from './ContactForm.styled'

export default function ContactForm() {
  return (
    <StyledContactForm>
      <label htmlFor='name'>Your Name</label>
      <input type='text' id='name' placeholder='Abc' />
      <label htmlFor='email'>Email address</label>
      <input type='text' id='email' placeholder='Abc@def.com' />
      <label htmlFor='subject'>Subject</label>
      <input type='text' id='subject' placeholder='This is an optional' />
      <label htmlFor='message'>Message</label>
      <textarea placeholder="Hi! I'd like to ask about" rows='4' />
      <input type='submit' value='Submit' />
    </StyledContactForm>
  )
}

import React from 'react'

import HeroSection from '../../components/HeroSection/HeroSection'
import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import styles from './page.module.scss'
import Progress from '../../components/Progress/Progress'

export default function Login() {
  return (
    <>
      <HeroSection title='My Account' />
      <section className={styles.registrationForm}>
        <LoginForm />
        <RegisterForm />
      </section>
      <Progress />
    </>
  )
}

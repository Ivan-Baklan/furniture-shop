import Image from 'next/image'
import React from 'react'

import MeubelLogo from '../../../public/pictures/icons/Meubel_logo.svg'
import styles from './HeroSection.module.scss'

export default function HeroSection({ title }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSection_wrapper}>
        <Image src={MeubelLogo} alt='Logo' />
        <h3>{title}</h3>
        <p>Home</p>
        <span>{`${title}`}</span>
      </div>
    </section>
  )
}

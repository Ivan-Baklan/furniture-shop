import React from 'react'

import Link from 'next/link'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <p className={styles.address}>
          400 University Drive Suite 200 Coral Gables,
          <br />
          FL 33134 USA
        </p>

        <ul className={styles.footer_navigation}>
          <li>
            <p>Link</p>
          </li>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/shop'>Shop</Link>
          </li>
          <li>
            <Link href='/blogs'>Blogs</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <ul className={styles.footer_navigation}>
          <li>
            <p>Help</p>
          </li>
          <li>
            <Link href='/'>Payment Options</Link>
          </li>
          <li>
            <Link href='/'>Returns</Link>
          </li>
          <li>
            <Link href='/'>Privacy Policies</Link>
          </li>
        </ul>
        <form className={styles.subscribeForm}>
          <p>Newsletter</p>
          <input type='email' placeholder='Enter Your Email Address' />
          <input type='submit' value='Subscribe' />
        </form>
      </div>
      <hr className={styles.horizontaLine} />
      <p className={styles.rights}>2022 Meubel House. All rights reverveds</p>
    </footer>
  )
}

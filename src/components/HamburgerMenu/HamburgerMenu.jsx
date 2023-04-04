'use client'

import React, { useState } from 'react'

import Link from 'next/link'

import Image from 'next/image'

import searchSVG from '../../../public/pictures/icons/search.svg'
import heartSVG from '../../../public/pictures/icons/heart.svg'

import PortalButton from '../PortalButton/PortalButton'
import UserButton from '../UserButton/UserButton'

import styles from './HamburgerMenu.module.scss'

export default function HamburgerMenu() {
  const [isActiveHamburger, setActiveHamburger] = useState(false)
  return (
    <div className={styles.hamburgerMenu_container}>
      <button
        type='button'
        className={styles.menuButton}
        onClick={() => setActiveHamburger(!isActiveHamburger)}
      >
        <div className={isActiveHamburger ? styles.active : ''} />
        <div className={isActiveHamburger ? styles.active : ''} />
        <div className={isActiveHamburger ? styles.active : ''} />
      </button>

      <div
        className={`${styles.hamburgerMenu_navBar}  ${
          isActiveHamburger ? styles.shown : styles.hidden
        }`}
      >
        <ul className={styles.page_nav}>
          <li>
            <Link
              role='button'
              href='/'
              onClick={() => setActiveHamburger(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              role='button'
              href='/shop'
              onClick={() => setActiveHamburger(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              role='button'
              href='/blogs'
              onClick={() => setActiveHamburger(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              role='button'
              href='/contact'
              onClick={() => setActiveHamburger(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className={styles.user_nav}>
          <li>
            <UserButton onClick={() => setActiveHamburger(false)} />
          </li>
          <li>
            <Image
              role='button'
              src={searchSVG}
              alt='search_icon'
              onClick={() => setActiveHamburger(false)}
            />
          </li>
          <li>
            <Image
              role='button'
              src={heartSVG}
              alt='heart_icon'
              onClick={() => setActiveHamburger(false)}
            />
          </li>
          <li>
            <PortalButton onClick={() => setActiveHamburger(false)} />
          </li>
        </ul>
      </div>
    </div>
  )
}

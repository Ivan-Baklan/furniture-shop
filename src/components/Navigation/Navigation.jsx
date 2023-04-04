import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import searchSVG from '../../../public/pictures/icons/search.svg'
import heartSVG from '../../../public/pictures/icons/heart.svg'

import styles from './Navigation.module.scss'
import PortalButton from '../PortalButton/PortalButton'
import UserButton from '../UserButton/UserButton'

export default function Navigation() {
  return (
    <>
      <nav className={styles.header_nav}>
        <Link href='/'>Home</Link>

        <Link href='/shop'>Shop</Link>

        <Link href='/blogs'>Blogs</Link>

        <Link href='/contact'>Contact</Link>
      </nav>
      <ul className={styles.user_menu}>
        <li>
          <UserButton />
        </li>
        <li>
          <Image src={searchSVG} alt='search_icon' />
        </li>
        <li>
          <Image src={heartSVG} alt='heart_icon' />
        </li>
        <li>
          <PortalButton />
        </li>
      </ul>
    </>
  )
}

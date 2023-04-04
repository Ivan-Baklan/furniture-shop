'use client'

import React, { useState } from 'react'

import Image from 'next/image'

import sofa_first from '../../../public/pictures/images/singleProduct/Cloud sofa three seater + ottoman_1 1.png'

import sofa_second from '../../../public/pictures/images/singleProduct/Cloud sofa three seater + ottoman_2 1.png'

import styles from './DescriptionBlock.module.scss'

export default function DescriptionBlock({ desc, reviews }) {
  const [activeButton, setActiveButton] = useState('Description')

  const buttonsHandler = (e) => {
    const newActive = e.target.value

    setActiveButton(newActive)
  }

  return (
    <div className={styles.descriptionBlock}>
      <div className={styles.navPanel}>
        <button
          type='button'
          className={activeButton === 'Description' ? styles.active : ''}
          value='Description'
          onClick={buttonsHandler}
        >
          Description
        </button>
        <button
          type='button'
          className={activeButton === 'Information' ? styles.active : ''}
          value='Information'
          onClick={buttonsHandler}
        >
          Additional Information
        </button>
        <button
          type='button'
          className={activeButton === 'Reviews' ? styles.active : ''}
          value='Reviews'
          onClick={buttonsHandler}
        >
          Reviews [{reviews}]
        </button>
      </div>
      <p>{desc}</p>
      <div className={styles.desc_images}>
        <Image src={sofa_first} alt='sofa_first' width='auto' height='auto' />
        <Image src={sofa_second} alt='sofa_second' width='auto' height='auto' />
      </div>
    </div>
  )
}

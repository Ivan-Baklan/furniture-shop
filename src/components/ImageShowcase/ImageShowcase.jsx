'use client'

import React, { useState } from 'react'

import Image from 'next/image'

import styles from './ImageShowcase.module.scss'

export default function ImageShowcase({ productImage }) {
  const [currentImage, setCurrentImage] = useState({ id: 1 })

  const mainImage = productImage.find((elem) => elem.id === currentImage.id)

  const showcaseHandler = (e) => {
    const newMainImage = { id: Number(e.target.value) }

    setCurrentImage(newMainImage)
  }

  return (
    <div className={styles.leftside_showcase}>
      <div className={styles.tumbnail_panel}>
        {productImage.map((elem) => (
          <div key={elem.id} className={styles.tumbnail}>
            <button
              type='button'
              value={elem.id}
              style={{ backgroundImage: `url(${elem.imagePath})` }}
              onClick={showcaseHandler}
              aria-label='show_image'
            />
          </div>
        ))}
      </div>
      <Image
        className={styles.main_image}
        src={mainImage.imagePath}
        alt='main image'
        width={mainImage.width}
        height={mainImage.height}
      />
    </div>
  )
}

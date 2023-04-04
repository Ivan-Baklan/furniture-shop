import React from 'react'

import Image from 'next/image'

import starSVG from '../../../public/pictures/icons/singleproduct/star.svg'

import halfStarSVG from '../../../public/pictures/icons/singleproduct/half_star.svg'

import styles from './RatingBar.module.scss'

export default function RatingBar({ ratingNumber, reviews }) {
  const starsArray = Array.from({ length: ratingNumber }, (_, x) => ({
    id: x + 1,
    fill: 'full',
  }))
  if (Math.floor(ratingNumber) !== Math.round(ratingNumber)) {
    starsArray.push({ id: Math.round(ratingNumber), fill: 'half' })
  }

  return (
    <div className={styles.rating_container}>
      <div className={styles.rating_wrapper}>
        {starsArray.map((_elem) => (
          <Image
            key={_elem.id}
            src={_elem.fill === 'full' ? starSVG : halfStarSVG}
            alt='star'
          />
        ))}
      </div>
      <span>{' | '}</span>
      <small>{reviews} Customer reviews</small>
    </div>
  )
}

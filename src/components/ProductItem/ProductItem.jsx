import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './ProductItem.module.scss'

export default function ProductItem({ name, image, price, sku }) {
  return (
    <div className={styles.productItem}>
      <Link href={`/shop/product/${sku}`}>
        <div className={styles.image_container}>
          <Image
            src={image.imagePath}
            alt={image.imageName}
            width={image.width}
            height={image.height}
          />
        </div>

        <h4>{name}</h4>

        <p>{price}</p>
      </Link>
    </div>
  )
}

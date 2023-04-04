import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './RelatedProducts.module.scss'

async function getProduct(category) {
  const res = await fetch(`${process.env.MOCK_SERVER}/shopList`, {
    next: { revalidate: 600 },
  })

  const data = await res.json()

  return data
    .filter((elem) => elem.productInfo.category === category)
    .slice(0, 4)
}

export default async function RelatedProducts({ category }) {
  const products = await getProduct(category)

  return (
    <section className={styles.topPicks_container}>
      <h3>Related Products</h3>

      <div className={styles.topPicks_list}>
        {products.map((_elem) => (
          <div className={styles.topPicks_item} key={_elem.id}>
            <Image
              key={_elem.id}
              src={_elem.mainImage.imagePath}
              width={_elem.mainImage.width}
              height={_elem.mainImage.height}
              alt={_elem.mainImage.imageName}
            />
            <Link href={`/shop/product/${_elem.productInfo.sku}`}>
              <h4>{_elem.title}</h4>
            </Link>
            <p>{_elem.currency.concat(' ', _elem.value)}</p>
          </div>
        ))}
      </div>
      <div className={styles.viewMore_anchor}>
        <Link href='/shop'>View More</Link>
        <hr />
      </div>
    </section>
  )
}

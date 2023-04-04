import Link from 'next/link'
import React from 'react'

import styles from './CategoriesNav.module.scss'

async function getCategories() {
  const res = await fetch(`${process.env.MOCK_SERVER}/blogs`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()
  const categories = [...data].map((elem) => elem.category)
  const catObj = {}
  categories.forEach((elem) =>
    Object.hasOwn(catObj, elem) ? (catObj[elem] += 1) : (catObj[elem] = 1),
  )

  return catObj
}

export default async function CategoriesNav() {
  const categories = await getCategories()
  return (
    <div className={styles.category_table}>
      <h3 className={styles.heading}>Categories</h3>
      <div className={styles.content}>
        {Object.keys(categories)
          .sort()
          .map((elem) => (
            <div key={elem} className={styles.item_container}>
              <Link href={`/blogs/category/${elem}`}>
                <p className={styles.item}>{elem}</p>

                <p className={styles.item}>{categories[elem]}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

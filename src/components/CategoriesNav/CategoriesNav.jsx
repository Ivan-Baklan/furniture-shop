import Link from 'next/link'
import React from 'react'

import styles from './CategoriesNav.module.scss'

export default async function CategoriesNav() {
  const categories = await getCategories()
  return (
    <div className={styles.category_table}>
      <h3 className={styles.heading}>Categories</h3>
      <div className={styles.content}>
        {Object.keys(categories)
          .sort()
          .map((_elem) => {
            return (
              <div key={_elem} className={styles.item_container}>
                <Link href={`/blogs/${_elem}/1`}>
                  <p className={styles.item}>{_elem}</p>

                  <p className={styles.item}>{categories[_elem]}</p>
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

async function getCategories() {
  const res = await fetch(`http://localhost:3000/blogs`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()
  const categories = [...data].map((elem) => elem.category)
  const catObj = {}
  categories.forEach((elem) => {
    Object.hasOwn(catObj, elem) ? catObj[elem]++ : (catObj[elem] = 1)
  })
  return catObj
}

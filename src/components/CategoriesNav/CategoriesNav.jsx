import React from 'react'

import Link from 'next/link'

import styles from './CategoriesNav.module.scss'

import blogs from '../../data/blogs'

export default function CategoriesNav() {
  const categories = getCategories()
  return (
    <div className={styles.category_table}>
      <h3 className={styles.heading}>Categories</h3>
      <div className={styles.content}>
        {Object.keys(categories)
          .sort()
          .map((elem) => (
            <div key={elem} className={styles.item_container}>
              <Link href={`/blogs/category/${elem}?page=1`}>
                <p className={styles.item}>{elem}</p>

                <p className={styles.item}>{categories[elem]}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

function getCategories() {
  const data = [...blogs]
  const categories = [...data].map((elem) => elem.category)
  const catObj = {}
  categories.forEach((elem) =>
    Object.hasOwn(catObj, elem)
      ? (catObj[elem] = catObj[elem] + 1)
      : (catObj[elem] = 1),
  )

  return catObj
}

import React from 'react'
import Image from 'next/image'
import styles from './RecentPosts.module.scss'
import Link from 'next/link'

export default async function RecentPosts() {
  const recentPosts = await getRecentPosts()
  return (
    <div className={styles.recentPosts_container}>
      <h4>Recent Posts</h4>
      <div className={styles.recentPostsList}>
        {recentPosts.map((_elem) => {
          return (
            <div className={styles.post_item} key={_elem.id}>
              <Image
                src={_elem.imageSmall.imagePath}
                alt={_elem.imageSmall.imageName}
                width={_elem.imageSmall.width}
                height={_elem.imageSmall.height}
              />
              <div className={styles.item_heading}>
                <Link href={`/blogs/${_elem.article}`}>
                  <h6>{_elem.article}</h6>
                </Link>
                <p>{_elem.dateTime}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

async function getRecentPosts() {
  const res = await fetch(`http://localhost:3000/blogs`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()

  return data.reverse().slice(0, 4)
}

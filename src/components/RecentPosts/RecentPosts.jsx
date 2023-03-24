import React from 'react'

import Image from 'next/image'

import Link from 'next/link'

import styles from './RecentPosts.module.scss'
import blogs from '../../data/blogs'

export default async function RecentPosts() {
  const recentPosts = await getRecentPosts()
  return (
    <div className={styles.recentPosts_container}>
      <h4>Recent Posts</h4>
      <div className={styles.recentPostsList}>
        {recentPosts.map((_elem) => (
          <div className={styles.post_item} key={_elem.id}>
            <Image
              src={_elem.imageSmall.imagePath}
              alt={_elem.imageSmall.imageName}
              width={_elem.imageSmall.width}
              height={_elem.imageSmall.height}
            />
            <div className={styles.item_heading}>
              <Link href={`/blogs/post/${_elem.article}`}>
                <h6>{_elem.article}</h6>
              </Link>
              <p>{_elem.dateTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

async function getRecentPosts() {
  const data = blogs

  return data.reverse().slice(0, 4)
}

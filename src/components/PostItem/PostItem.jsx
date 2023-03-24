import React from 'react'

import Image from 'next/image'

import Link from 'next/link'

import userSVG from '../../../public/pictures/icons/blogPage/user.svg'

import labelSVG from '../../../public/pictures/icons/blogPage/label.svg'

import calendarSVG from '../../../public/pictures/icons/blogPage/calendar.svg'

import styles from './PostItem.module.scss'

export default function PostItem({ post }) {
  return (
    <div className={styles.blogs_post}>
      <Image
        className={styles.post_image}
        src={post.images_big.imagePath}
        width={post.images_big.width}
        height={post.images_big.height}
        alt={post.images_big.imageName}
      />
      <div className={styles.post_info}>
        <span>
          <Image src={userSVG} alt='user_icon' />
          {post.editor}
        </span>
        <span>
          <Image src={calendarSVG} alt='calendat_icon' />
          {post.dateTime}
        </span>
        <span>
          <Image src={labelSVG} alt='category_icon' />
          {post.category}
        </span>
      </div>
      <h4 className={styles.post_article}>{post.article}</h4>
      <p className={styles.post_descr}>{post.description}</p>
      <div className={styles.post_readMore}>
        <Link href={`/blogs/post/${post.article}`}>Read More</Link>
        <hr />
      </div>
    </div>
  )
}

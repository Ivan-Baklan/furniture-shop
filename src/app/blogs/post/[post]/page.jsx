import React from 'react'

import Image from 'next/image'

import styles from './page.module.scss'

import userSVG from '../../../../../public/pictures/icons/blogPage/user.svg'

import labelSVG from '../../../../../public/pictures/icons/blogPage/label.svg'

import calendarSVG from '../../../../../public/pictures/icons/blogPage/calendar.svg'

async function getPost(article) {
  const res = await fetch(`${process.env.MOCK_SERVER}/blogs`, {
    next: { revalidate: 600 },
  })

  const data = await res.json()
  const post = article.split('%20').join(' ')

  return data.find((elem) => elem.article.includes(post))
}

export default async function Post({ params }) {
  const post = await getPost(params.post)

  return (
    <main className={styles.post_content}>
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
      </div>
    </main>
  )
}

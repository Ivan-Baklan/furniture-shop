import React from 'react'
import Image from 'next/image'
import HeroSection from '../../../../components/HeroSection/HeroSection'
import styles from './page.module.scss'

import magnifierSVG from '../../../../../public/pictures/icons/blogPage/magnifier.svg'

import PostItem from '../../../../components/PostItem/PostItem'
import PaginationBar from '../../../../components/PaginationBar/PaginationBar'
import CategoriesNav from '../../../../components/CategoriesNav/CategoriesNav'
import Progress from '../../../../components/Progress/Progress'
import RecentPosts from '../../../../components/RecentPosts/RecentPosts'

export default async function About({ params }) {
  const pageSize = {
    start: (Number(params.pageNumber) - 1) * 3,
    end: Number(params.pageNumber) * 3,
  }
  const posts = await getBlogs()

  return (
    <>
      <HeroSection title='Blog' />
      <main className={styles.mainBlog_container}>
        <section className={styles.blogs_container}>
          {[...posts].slice(pageSize.start, pageSize.end).map((_elem) => (
            <PostItem key={_elem.id} post={_elem} />
          ))}
        </section>
        <nav className={styles.blogs_searchBar}>
          <form className={styles.searchBar}>
            <input type='text' />
            <button type='button'>
              <Image src={magnifierSVG} alt='magnifier_button' />
            </button>
          </form>
          <CategoriesNav />
          <RecentPosts />
        </nav>
        <PaginationBar postsAmount={posts.length} pageSize={3} />
      </main>
      <Progress />
    </>
  )
}

async function getBlogs() {
  const res = await fetch(`http://localhost:3000/blogs`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()
  return data
}

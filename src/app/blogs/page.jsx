import React from 'react'
import Image from 'next/image'
import HeroSection from '../../components/HeroSection/HeroSection'
import styles from './page.module.scss'

import magnifierSVG from '../../../public/pictures/icons/blogPage/magnifier.svg'

import PostItem from '../../components/PostItem/PostItem'
import PaginationBar from '../../components/PaginationBar/PaginationBar'
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav'
import Progress from '../../components/Progress/Progress'
import RecentPosts from '../../components/RecentPosts/RecentPosts'

async function getBlogs() {
  const res = await fetch(`${process.env.MOCK_SERVER}/blogs`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()

  return {
    blogs: data,
    length: data.length,
  }
}

export default async function About({ searchParams }) {
  const pageSize = 3
  const pageRange = {
    start: searchParams.page ? (Number(searchParams.page) - 1) * pageSize : 0,
    end: searchParams.page ? Number(searchParams.page) * pageSize : pageSize,
  }
  const { blogs, length } = await getBlogs(searchParams)

  return (
    <>
      <HeroSection title='Blog' />
      <main className={styles.mainBlog_container}>
        <section className={styles.blogs_container}>
          {[...blogs].slice(pageRange.start, pageRange.end).map((_elem) => (
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
        <PaginationBar postsAmount={length} pageSize={pageSize} />
      </main>
      <Progress />
    </>
  )
}

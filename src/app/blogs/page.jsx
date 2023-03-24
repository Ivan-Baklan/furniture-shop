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

import blogs from '../../data/blogs'

export default function About({ searchParams }) {
  const pageRange = {
    start: searchParams.page ? (Number(searchParams.page) - 1) * 3 : 0,
    end: searchParams.page ? Number(searchParams.page) * 3 : 3,
  }
  const { blogsArr, length } = getBlogs(searchParams)
  console.log(searchParams)
  return (
    <>
      <HeroSection title='Blog' />
      <main className={styles.mainBlog_container}>
        <section className={styles.blogs_container}>
          {[...blogsArr].slice(pageRange.start, pageRange.end).map((_elem) => (
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
        <PaginationBar postsAmount={length} pageSize={3} />
      </main>
      <Progress />
    </>
  )
}

function getBlogs() {
  const data = blogs

  return {
    blogsArr: blogs,
    length: data.length,
  }
}

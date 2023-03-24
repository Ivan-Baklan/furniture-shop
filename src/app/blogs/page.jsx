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

export default async function About({ searchParams }) {
  const pageRange = {
    start: searchParams.page ? (Number(searchParams.page) - 1) * 3 : 0,
    end: searchParams.page ? Number(searchParams.page) * 3 : 3,
  }
  const { blogs, length, catObj } = await getBlogs(searchParams)

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
          <CategoriesNav catData={catObj} />
          <RecentPosts />
        </nav>
        <PaginationBar postsAmount={length} pageSize={3} />
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
  const categories = [...data].map((elem) => elem.category)
  const catObj = {}
  categories.forEach((elem) => {
    Object.hasOwn(catObj, elem) ? catObj[elem] + 1 : (catObj[elem] = 1)
  })

  return {
    blogs: data,
    length: data.length,
    catObj,
  }
}

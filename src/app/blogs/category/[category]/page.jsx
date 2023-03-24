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
import blogs from '../../../../data/blogs'

export default function BlogsByCategoryPage({ params, searchParams }) {
  const pageSize = {
    start: (Number(searchParams.page) - 1) * 3,
    end: Number(searchParams.page) * 3,
  }
  const postsByCategory = getCategory(params.category)
  console.log(postsByCategory)
  return (
    <>
      <HeroSection title='Blog' />
      <main className={styles.mainBlog_container}>
        <section className={styles.blogs_container}>
          {[...postsByCategory]
            .slice(pageSize.start, pageSize.end)
            .map((_elem) => (
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
        <PaginationBar postsAmount={postsByCategory.length} pageSize={3} />
      </main>
      <Progress />
    </>
  )
}

function getCategory(category) {
  const data = blogs
  const filteredData = [...data].filter(
    (_elem) => _elem.category.toLowerCase() === category.toLowerCase(),
  )

  return filteredData
}

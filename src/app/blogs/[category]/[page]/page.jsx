import React from 'react'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection/HeroSection'
import styles from './page.module.scss'

import magnifierSVG from '../../../../../public/pictures/icons/blogPage/magnifier.svg'

import PostItem from '@/components/PostItem/PostItem'
import PaginationBar from '@/components/PaginationBar/PaginationBar'
import CategoriesNav from '@/components/CategoriesNav/CategoriesNav'
import Progress from '@/components/Progress/Progress'
import RecentPosts from '@/components/RecentPosts/RecentPosts'

export default async function BlogsByCategoryPage({ params }) {
  const pageSize = {
    start: (Number(params.page) - 1) * 3,
    end: Number(params.page) * 3,
  }
  const postsByCategory = await getCategory(params.category)

  return (
    <>
      <HeroSection title={'Blog'} />
      <main className={styles.mainBlog_container}>
        <section className={styles.blogs_container}>
          {[...postsByCategory]
            .slice(pageSize.start, pageSize.end)
            .map((_elem) => {
              return <PostItem key={_elem.id} post={_elem} />
            })}
        </section>
        <nav className={styles.blogs_searchBar}>
          <form className={styles.searchBar}>
            <input type='text' />
            <button>
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

async function getCategory(category) {
  const res = await fetch(`http://localhost:3000/blogs`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()
  return data.filter(
    (_elem) => _elem.category.toLowerCase() === category.toLowerCase(),
  )
}

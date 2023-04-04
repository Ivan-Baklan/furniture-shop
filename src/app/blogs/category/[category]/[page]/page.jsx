import React from 'react'

import Image from 'next/image'

import HeroSection from '../../../../../components/HeroSection/HeroSection'

import styles from './page.module.scss'

import magnifierSVG from '../../../../../../public/pictures/icons/blogPage/magnifier.svg'

import PostItem from '../../../../../components/PostItem/PostItem'

import PaginationBar from '../../../../../components/PaginationBar/PaginationBar'

import CategoriesNav from '../../../../../components/CategoriesNav/CategoriesNav'

import Progress from '../../../../../components/Progress/Progress'

import RecentPosts from '../../../../../components/RecentPosts/RecentPosts'

async function getCategory(category) {
  const res = await fetch(`${process.env.MOCK_SERVER}/blogs`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()
  return data.filter(
    (elem) => elem.category.toLowerCase() === category.toLowerCase(),
  )
}

export default async function BlogsByCategoryPage({ params }) {
  const pageSize = {
    start: params?.page ? (Number(params.page) - 1) * 3 : 0,
    end: params?.page ? Number(params.page) * 3 : 3,
  }
  const postsByCategory = await getCategory(params.category)
  console.log(params)
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
        <PaginationBar
          postsAmount={postsByCategory.length}
          pageSize={3}
          page={params.page}
          path={`blogs/category/${params.category}`}
        />
      </main>
      <Progress />
    </>
  )
}

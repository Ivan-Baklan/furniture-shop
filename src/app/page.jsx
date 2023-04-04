import React from 'react'

import Image from 'next/image'

import Link from 'next/link'

import styles from './page.module.scss'

import bigSeater from '../../public/pictures/images/Rocket single seater 1.png'

import firstSideTable from '../../public/pictures/images/Granite square side table 1.png'

import secondSideTable from '../../public/pictures/images/Cloud sofa three seater + ottoman_3 1.png'

import newArrival from '../../public/pictures/images/Asgaard sofa 1.png'

import clockSVG from '../../public/pictures/icons/clock.svg'

import calenderSVG from '../../public/pictures/icons/calender.svg'

async function getProducts() {
  const res = await fetch(`${process.env.MOCK_SERVER}/shopList`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()

  const topProducts = data
    .filter((elem) => elem.rating > 3)
    .sort()
    .slice(0, 4)
  return topProducts
}

async function getPosts() {
  const res = await fetch(`${process.env.MOCK_SERVER}/blogs`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()
  return data
}

export default async function Home() {
  const products = await getProducts()
  const posts = await getPosts()

  return (
    <main>
      <section className={styles.singleSeater}>
        <div className={styles.singleSeater_heading}>
          <h2>Rocket single seater</h2>
          <Link href='/shop'>Shop Now</Link>
        </div>

        <Image src={bigSeater} alt='bigseater' />
      </section>
      <section className={styles.categoriesShowcase}>
        <div className={styles.catItem}>
          <div>
            <Image src={firstSideTable} alt='firts_sidetable' />
          </div>
          <h3>Side Table</h3>
          <Link href='/shop'>View More</Link>
        </div>
        <div className={styles.catItem}>
          <div>
            <Image src={secondSideTable} alt='second_sidetable' />
          </div>
          <h3>Side Table</h3>
          <Link href='/shop'>View More</Link>
        </div>
      </section>

      <section className={styles.topPicks_container}>
        <h3>Top Picks For You</h3>
        <p>
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
        <div className={styles.topPicks_list}>
          {products.map((_elem) => (
            <div className={styles.topPicks_item} key={_elem.id}>
              <Image
                key={_elem.id}
                src={_elem.mainImage.imagePath}
                width={_elem.mainImage.width}
                height={_elem.mainImage.height}
                alt={_elem.mainImage.imageName}
              />
              <Link href={`/shop/product/${_elem.productInfo.sku}`}>
                <h4>{_elem.title}</h4>
              </Link>
              <p>{_elem.currency.concat(' ', _elem.value)}</p>
            </div>
          ))}
        </div>
        <div className={styles.viewMore_anchor}>
          <Link href='/shop'>View More</Link>
          <hr />
        </div>
      </section>
      <section className={styles.newArrival_section}>
        <Image src={newArrival} alt='newArrival' />
        <div className={styles.newArrival__description}>
          <p>New Arrival</p>
          <h3>Asgaard sofa</h3>
          <Link href='/shop'>Order Now</Link>
        </div>
      </section>
      <section className={styles.newBlogs_section}>
        <div className={styles.newBlogs_wrapper}>
          <h3>Our blogs</h3>
          <p>Find a bright ideal to suit your taste with our great selection</p>
          <div className={styles.blogs_list}>
            {posts.slice(0, 3).map((_elem) => (
              <div key={_elem.id} className={styles.post_item}>
                <Image
                  className={styles.post_picture}
                  src={_elem.images_big.imagePath}
                  alt={_elem.images_big.imageName}
                  width={393}
                  height={393}
                />
                <h4>{_elem.article}</h4>
                <div className={styles.viewMore}>
                  <Link href='/shop'>View More</Link>
                  <hr />
                </div>
                <div className={styles.post_info}>
                  <p className={styles.info}>
                    <Image src={clockSVG} alt='clock_svg' />5 min
                  </p>
                  <p className={styles.info}>
                    <Image src={calenderSVG} alt='calendar_svg' />
                    {_elem.dateTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewMore_anchor}>
            <Link href='/blogs'>View All Posts</Link>
            <hr />
          </div>
        </div>
      </section>
      <section className={styles.ourInstagram_section}>
        <div className={styles.ourInstagram_wrapper}>
          <h2>Our Instagram</h2>
          <p>Follow our store on Instagram</p>
          <Link href='#'>Follow Us</Link>
        </div>
      </section>
    </main>
  )
}

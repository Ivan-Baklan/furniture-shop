import React from 'react'

import Image from 'next/image'

import styles from './ShopFilterBar.module.scss'

import filterSVG from '../../../public/pictures/icons/shop/filter.svg'

import squareSVG from '../../../public/pictures/icons/shop/squares-view.svg'

import rectSVG from '../../../public/pictures/icons/shop/rectangle-view.svg'

async function getShopListLength() {
  const res = await fetch(`${process.env.MOCK_SERVER}/shopList`, {
    next: { revalidate: 300 },
  })

  const data = await res.json()

  return data.length
}

export default async function ShopFilterBar({ searchParams }) {
  const lenght = await getShopListLength()
  const pageSize = 16
  const pageRange = {
    start: searchParams.page ? (Number(searchParams.page) - 1) * pageSize : 0,
    end: searchParams.page ? Number(searchParams.page) * pageSize : pageSize,
  }
  return (
    <section className={styles.filterBar_container}>
      <div className={styles.filterBar_wrapper}>
        <div className={styles.leftside_viewPanel}>
          <button type='button' className={styles.filterButton}>
            <Image src={filterSVG} alt='filter_svg' />
            Filter
          </button>
          <button type='button'>
            <Image src={squareSVG} alt='square_svg' />
          </button>
          <button type='button'>
            <Image src={rectSVG} alt='rect_svg' />
          </button>
          <div className={styles.verticalLine} />
          <p>
            Showing{' '}
            {`${pageRange.start + 1} - ${
              pageRange.end <= lenght ? pageRange.end : lenght
            }`}{' '}
            of {lenght} results
          </p>
        </div>
        <div className={styles.rightside_filterPanel}>
          <form className={styles.sorting_form}>
            <label>
              Show
              <input
                type='text'
                placeholder='16'
                size='1'
                className={styles.sizeInput}
              />
            </label>
            <label>
              Sort by
              <input type='text' placeholder='Default' size='6' />
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

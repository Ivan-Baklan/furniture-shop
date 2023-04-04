import React from 'react'
import PaginationBar from '../PaginationBar/PaginationBar'
import ProductItem from '../ProductItem/ProductItem'

import styles from './ShopMarket.module.scss'

async function getShopList() {
  const res = await fetch(`${process.env.MOCK_SERVER}/shopList`, {
    next: { revalidate: 300 },
  })

  const data = await res.json()

  return data
}

export default async function ShopMarket({ searchParams }) {
  const shopList = await getShopList()
  const pageSize = 16
  const pageRange = {
    start: searchParams.page ? (Number(searchParams.page) - 1) * 16 : 0,
    end: searchParams.page ? Number(searchParams.page) * 16 : 16,
  }

  return (
    <main className={styles.shopMarket_main}>
      <section className={styles.shopMarket_container}>
        {shopList.slice(pageRange.start, pageRange.end).map((elem) => (
          <ProductItem
            key={elem.id}
            name={elem.title}
            image={elem.mainImage}
            price={elem.currency + elem.value}
            sku={elem.productInfo.sku}
          />
        ))}
      </section>
      <PaginationBar
        postsAmount={shopList.length}
        pageSize={pageSize}
        page={searchParams.page}
        path='shop/page'
      />
    </main>
  )
}

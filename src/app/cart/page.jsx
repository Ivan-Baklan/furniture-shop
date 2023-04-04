'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import Progress from '../../components/Progress/Progress'

import styles from './page.module.scss'
import { changeAmount, deleteItem } from '../../redux/slices/cartSlice'

export default function Cart() {
  const list = useSelector((state) => state.cart.cartList)
  let total
  if (list.length !== 0) {
    total = [...list]
      ?.map((elem) => elem.price * elem.quantity)
      .reduce((current, accum) => current + accum)
  }
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    if (Number(e.target.value) >= 1) {
      dispatch(
        changeAmount({
          id: e.target.getAttribute('pid'),
          quantity: Number(e.target.value),
        }),
      )
    }
  }

  return (
    <>
      <section className={styles.cart_container}>
        <div className={styles.shopList}>
          <div className={styles.heading_panel}>
            <h5 className={styles.product}>Product</h5>
            <h5 className={styles.price}>Price</h5>
            <h5 className={styles.quant}>Quantity</h5>
            <h5 className={styles.subtotal}>Subtotal</h5>
          </div>
          <div className={styles.list}>
            {list.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              list.map((elem) => (
                <div className={styles.item} key={elem.id}>
                  <Image
                    src={elem.image}
                    width={113}
                    height={93}
                    alt='product image'
                  />
                  <p className={styles.info_name}>{elem.name}</p>
                  <p className={styles.info}>
                    {'Rs. '} {elem.price}
                  </p>
                  <input
                    type='number'
                    pid={elem.id}
                    value={elem.quantity}
                    size='1'
                    className={styles.amountInput}
                    onChange={changeHandler}
                  />
                  <p className={styles.total}>
                    {'Rs. '} {elem.price * elem.quantity}
                  </p>
                  <button
                    type='button'
                    className={styles.delete_button}
                    onClick={(e) => {
                      dispatch(deleteItem(Number(e.target.value)))
                    }}
                    value={elem.id}
                    aria-label='delete'
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className={styles.asideTotal_panel}>
          <h3>Cart Totals</h3>
          <p className={styles.subtotal}>
            Subtotal
            <span>
              {'Rs. '} {list[0]?.price === undefined ? '0' : list[0].price}
            </span>
          </p>
          <p className={styles.total}>
            Total
            <span>
              {'Rs. '}
              {total === undefined || total.length === 0 ? '0' : total}
            </span>
          </p>
          <Link href='/checkout'>Check Out</Link>
        </div>
      </section>
      <Progress />
    </>
  )
}

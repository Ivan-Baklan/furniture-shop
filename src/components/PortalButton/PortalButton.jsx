'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'

import { useSelector, useDispatch } from 'react-redux'

import Image from 'next/image'

import CartPortal from '../CartPortal/CartPortal'

import styles from './PortalButton.module.scss'

import { deleteItem } from '../../redux/slices/cartSlice'

export default function PortalButton() {
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false)
  const access = useSelector((state) => state.auth.isAuth)
  const list = useSelector((state) => state.cart.cartList)
  let total = 0
  if (list.length !== 0) {
    total = [...list]
      .map((elem) => elem.price * elem.quantity)
      .reduce((accum, currentV) => accum + currentV)
  }

  const dispatch = useDispatch()
  return (
    <div>
      <button
        type='button'
        className={styles.portal_button}
        onClick={() => {
          window.innerWidth > 1000 ? setModalOpen(true) : router.push('/cart')
        }}
        aria-label='open_modal'
      />

      {isModalOpen && (
        <CartPortal>
          <div className={styles.module_overlay} role='presentation'>
            <div className={styles.module_container}>
              <div className={styles.main_content}>
                <div className={styles.heading_content}>
                  <h4>Shopping Cart</h4>
                  <button
                    type='button'
                    onClick={() => setModalOpen(false)}
                    className={styles.close_cart}
                    aria-label='close_cart'
                  />
                </div>
                <div className={styles.cartList}>
                  {list.length === 0 ? (
                    <p>Empty list please add products!</p>
                  ) : (
                    list.map((elem) => (
                      <div className={styles.cart_item} key={elem.id}>
                        <Image
                          src={elem.image}
                          width={111}
                          height={90}
                          alt='module_image'
                        />
                        <div>
                          <h6>{elem.name}</h6>
                          <p>
                            {elem.quantity} {' X '}
                            <span>
                              {'Rs. '} {Number(elem.price) * elem.quantity}
                            </span>
                          </p>
                        </div>
                        <button
                          type='button'
                          className={styles.delete_button}
                          onClick={(e) =>
                            dispatch(deleteItem(Number(e.target.value)))
                          }
                          value={elem.id}
                          aria-label='delete'
                        />
                      </div>
                    ))
                  )}
                </div>

                <div className={styles.sum}>
                  <p className={styles.subtotal}>Subtotal</p>
                  <p className={styles.price}>
                    {'Rs. '} {total || '0'}
                  </p>
                </div>
              </div>
              <ul className={styles.links}>
                <li>
                  <button
                    type='button'
                    onClick={() => {
                      setModalOpen(false)
                      access ? router.push('/cart') : router.push('/login')
                    }}
                  >
                    View Cart
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    onClick={() => {
                      setModalOpen(false)
                      access ? router.push('/checkout') : router.push('/login')
                    }}
                  >
                    Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </CartPortal>
      )}
    </div>
  )
}

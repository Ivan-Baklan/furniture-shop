'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import CartPortal from '../CartPortal/CartPortal'
import { logout } from '../../redux/slices/authSlice'
import styles from './UserButton.module.scss'

export default function UserButton() {
  const [isModalOpen, setModalOpen] = useState(false)
  const router = useRouter()
  const access = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const loginHandler = () => {
    if (access.isAuth) {
      setModalOpen(true)
    } else {
      router.push('/login')
    }
  }

  return (
    <>
      <button
        type='button'
        className={styles.user_button}
        onClick={loginHandler}
        aria-label='show User'
      />
      {isModalOpen && (
        <CartPortal>
          <div
            className={styles.module_overlay}
            onClick={() => setModalOpen(false)}
            role='presentation'
          >
            <div className={styles.module_container}>
              <button
                type='button'
                onClick={() => {
                  dispatch(logout())
                  setModalOpen(false)
                }}
                className={styles.sign_out}
              >
                Sign Out
              </button>
            </div>
          </div>
        </CartPortal>
      )}
    </>
  )
}

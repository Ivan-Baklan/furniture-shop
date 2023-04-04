'use client'

import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { IncDecWrapper, Wrapper } from './AddToCart.styled'

import { addItem } from '../../redux/slices/cartSlice'

function AddToCart({ name, price, image }) {
  const [productAmount, setProductAmount] = useState(1)
  const list = useSelector((state) => state.cart.cartList)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <IncDecWrapper>
        <button
          type='button'
          onClick={() =>
            productAmount > 1 ? setProductAmount(productAmount - 1) : ''
          }
        >
          -
        </button>
        <p data-testid='displayer'>{productAmount}</p>
        <button
          type='button'
          onClick={() => setProductAmount(productAmount + 1)}
        >
          +
        </button>
      </IncDecWrapper>
      <button
        type='button'
        onClick={() =>
          dispatch(
            addItem({
              id: list.length,
              image,
              name,
              quantity: productAmount,
              price,
            }),
          )
        }
      >
        Add To Cart
      </button>
    </Wrapper>
  )
}

export default AddToCart

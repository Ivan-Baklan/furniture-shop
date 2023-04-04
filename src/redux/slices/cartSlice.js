'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (
        state.cartList.find((elem) => elem.name === action.payload.name) ===
        undefined
      ) {
        state.cartList = [...state.cartList, action.payload]
      } else if (
        state.cartList.find((elem) => elem.name === action.payload.name)
      ) {
        const foundedIndex = state.cartList.findIndex(
          (elem) => elem.name === action.payload.name,
        )
        const newList = [...state.cartList]
        newList[foundedIndex].quantity = action.payload.quantity
        state.cartList = newList
      }
    },
    changeAmount: (state, action) => {
      const newList = state.cartList
      newList[action.payload.id].quantity = action.payload.quantity
      state.cartList = newList
    },
    deleteItem: (state, action) => {
      state.cartList = state.cartList.filter(
        (elem) => elem.id !== action.payload,
      )
    },
  },
})

export const { addItem, deleteItem, changeAmount } = cartSlice.actions

export default cartSlice.reducer

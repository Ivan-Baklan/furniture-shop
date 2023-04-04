'use client'

import { Provider } from 'react-redux'
import React from 'react'

import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

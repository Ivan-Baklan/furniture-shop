import React from 'react'

import HeroSection from '../../components/HeroSection/HeroSection'

import ShopMarket from '../../components/ShopMarket/ShopMarket'

import ShopFilterBar from '../../components/ShopFilterBar/ShopFilterBar'

import Progress from '../../components/Progress/Progress'

export default function Shop({ searchParams }) {
  return (
    <>
      <HeroSection title='Shop' />
      <ShopFilterBar searchParams={searchParams} />
      <ShopMarket searchParams={searchParams} />
      <Progress />
    </>
  )
}

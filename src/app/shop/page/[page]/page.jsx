import React from 'react'

import HeroSection from '../../../../components/HeroSection/HeroSection'

import ShopMarket from '../../../../components/ShopMarket/ShopMarket'

import ShopFilterBar from '../../../../components/ShopFilterBar/ShopFilterBar'

import Progress from '../../../../components/Progress/Progress'

export default function Shop({ params }) {
  console.log(params)
  return (
    <>
      <HeroSection title='Shop' />
      <ShopFilterBar searchParams={params} />
      <ShopMarket searchParams={params} />
      <Progress />
    </>
  )
}

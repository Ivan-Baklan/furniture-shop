import React from 'react'
import Image from 'next/image'

import styles from './page.module.scss'
import RatingBar from '../../../../components/RatingBar/RatingBar'
import SizeInput from '../../../../components/SizeInput/SizeInput'
import ColorInput from '../../../../components/ColorInput/ColorInput'
import AddToCart from '../../../../components/AddToCart/AddToCart'
import ImageShowcase from '../../../../components/ImageShowcase/ImageShowcase'
import faceBookSvg from '../../../../../public/pictures/icons/singleproduct/facebook.svg'

import instagramSvg from '../../../../../public/pictures/icons/singleproduct/Insta.svg'

import twitterSvg from '../../../../../public/pictures/icons/singleproduct/twitter.svg'

import DescriptionBlock from '../../../../components/DescriptionBlock/DescriptionBlock'
import RelatedProducts from '../../../../components/RelatedProducts/RelatedProducts'

async function getSingleProduct(sku) {
  const res = await fetch(`${process.env.MOCK_SERVER}/shopList`, {
    next: { revalidate: 300 },
  })
  const data = await res.json()
  return data.find((elem) => elem.productInfo.sku === sku)
}

export default async function Product({ params }) {
  const product = await getSingleProduct(params.product)
  // console.log(product)
  return (
    <main className={styles.singleProduct_container}>
      <div className={styles.singleProduct_wrapper}>
        <div className={styles.product_info}>
          <p>Home</p>
          <span>{' > '}</span>
          <p>Shop</p>
          <span>{' > '}</span>
          <div className={styles.verticalLine} />
          <p>{product.title}</p>
        </div>

        <div className={styles.product_mainContent}>
          <ImageShowcase productImage={product.images} />
          <div className={styles.product_rightside}>
            <h3>{product.title}</h3>
            <p>
              {product.currency} {' '.concat(product.value)}
            </p>
            <RatingBar
              ratingNumber={product.rating}
              reviews={product.reviews}
            />
            <p className={styles.product_descr}>{product.productInfo.info}</p>
            <SizeInput sizeList={product.productInfo.sizes} />
            <ColorInput colorList={product.productInfo.colors} />

            <AddToCart
              image={product.mainImage.imagePath}
              name={product.title}
              price={product.value}
            />

            <hr />
            <table>
              <tbody>
                <tr>
                  <th>SKU</th>
                  <td>:</td>
                  <td>{product.productInfo.sku}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>:</td>
                  <td>{product.productInfo.category}</td>
                </tr>
                <tr>
                  <th>Tags</th>
                  <td>:</td>
                  <td>{product.productInfo.tags.join(', ')}</td>
                </tr>
                <tr>
                  <th>Share</th>
                  <td>:</td>
                  <td>
                    <a href='https://www.facebook.com/'>
                      <Image src={faceBookSvg} alt='facebook_icon' />
                    </a>
                    <a href='https://www.instagram.com/'>
                      <Image src={instagramSvg} alt='instagram_icon' />
                    </a>
                    <a href='https://twitter.com/'>
                      <Image src={twitterSvg} alt='twitter_icon' />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr className={styles.divide_line} />
      <div className={styles.singleProduct_wrapper}>
        <DescriptionBlock
          desc={product.productInfo.info}
          reviews={product.reviews}
        />
      </div>
      <hr className={styles.divide_line} />
      <RelatedProducts category={product.productInfo.category} />
    </main>
  )
}

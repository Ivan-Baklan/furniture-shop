'use client'

import React from 'react'

import { useForm } from 'react-hook-form'

import { useSelector } from 'react-redux'
import HeroSection from '../HeroSection/HeroSection'

import styles from './BillingForm.module.scss'

const defaultValue = {
  firstName: '',
  lastName: '',
  companyName: '',
  countryOrRegion: '',
  streetAddress: '',
  townOrCity: '',
  province: '',
  zipCode: '',
  phone: '',
  email: '',
  transaction: '',
  additional: '',
}

export default function BillingForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(defaultValue)

  const list = useSelector((state) => state.cart.cartList)
  const subtotal = [...list]
    ?.map((elem) => Number(elem.price))
    .reduce((accum, current) => accum + current)
  const total = [...list]
    ?.map((elem) => Number(elem.price) * elem.quantity)
    .reduce((accum, current) => accum + current)

  const onSubmit = (data) => {
    console.log(data)
  }
  const onError = (error) => {
    console.log(error)
  }

  return (
    <>
      <HeroSection title='Checkout' />
      <section className={styles.checkout_container}>
        <form
          className={styles.checkout_form}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className={styles.leftside_checkout}>
            <h2>Billing Details</h2>
            <div className={styles.firstLast_name}>
              <label>
                First Name
                <input
                  type='text'
                  name='first_name'
                  {...register('firstName', {
                    required: 'Please enter your first name',
                  })}
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                />
                {errors.firstName && (
                  <p className={styles.attention_message}>
                    {errors.firstName.message}
                  </p>
                )}
              </label>
              <label>
                Last Name
                <input
                  type='text'
                  name='last_name'
                  {...register('lastName', {
                    required: 'Please enter your last name',
                  })}
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                />
                {errors.lastName && (
                  <p className={styles.attention_message}>
                    {errors.lastName.message}
                  </p>
                )}
              </label>
            </div>
            <label>
              Company Name(Optional)
              <input
                type='text'
                name='company_name'
                {...register('companyName')}
              />
            </label>
            <label>
              Country / Region
              <select
                name='country_region'
                {...register('countryAndRegion', {
                  required: 'Select your country',
                })}
                aria-invalid={errors.countryOrRegion ? 'true' : 'false'}
              >
                <option value='Germany'>Germany</option>
                <option value='Poland'>Poland</option>
                <option value='France'>France</option>
                <option value='Italy'>Italy</option>
                <option value='Spain'>Spain</option>
              </select>
              {errors.countryOrRegion && (
                <p className={styles.attention_message}>
                  {errors.countryOrRegion.message}
                </p>
              )}
            </label>
            <label>
              Street address
              <input
                type='text'
                name='street_address'
                {...register('streetAddress', {
                  required: 'Enter your street address',
                })}
              />
              {errors.streetAddress && (
                <p className={styles.attention_message}>
                  {errors.streetAddress.message}
                </p>
              )}
            </label>
            <label>
              Town / City
              <input
                type='text'
                name='town_city'
                {...register('townOrCity', {
                  required: 'Enter your Town or City',
                })}
                aria-invalid={errors.townOrCity ? 'true' : 'false'}
              />
              {errors.townOrCity && (
                <p className={styles.attention_message}>
                  {errors.townOrCity.message}
                </p>
              )}
            </label>
            <label>
              Province
              <select
                name='province'
                {...register('province', { required: 'Select your province' })}
                aria-invalid={errors.province ? 'true' : 'false'}
              >
                <option value='Western Province'>Western Province</option>
                <option value='East Province'>East Province</option>
                <option value='South Province'>South Province</option>
                <option value='Central Province'>Central Province</option>
              </select>
              {errors.province && (
                <p className={styles.attention_message}>
                  {errors.province.message}
                </p>
              )}
            </label>
            <label>
              Zip code
              <input
                type='text'
                name='zip_code'
                {...register('zipCode', {
                  required: 'Enter your zip code',
                  pattern: {
                    value: /[0-9]+-+[0-9]/,
                    message:
                      'Invalid zip code please enter in ( 0000-000 ) format',
                  },
                })}
                aria-invalid={errors.zipCode ? 'true' : 'false'}
              />
              {errors.zipCode && (
                <p className={styles.attention_message}>
                  {errors.zipCode.message}
                </p>
              )}
            </label>
            <label>
              Phone
              <input
                type='phone'
                name='phone'
                {...register('phone', {
                  required: 'Enter your phone number',
                  pattern: {
                    value:
                      /^\+?([0-9]{1,3})\)?[-. ]?([0-9]{3,4})[-. ]?([0-9]{3,4})?[-. ]?([0-9]{3,4})$/,
                    message:
                      'Invalid phone number please enter in ( +0-000-000-0000 ) format',
                  },
                })}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
              {errors.phone && (
                <p className={styles.attention_message}>
                  {errors.phone.message}
                </p>
              )}
            </label>
            <label>
              Email address
              <input
                type='text'
                name='email'
                {...register('email', {
                  required: 'Enter your email address',
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid email address',
                  },
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className={styles.attention_message}>
                  {errors.email.message}
                </p>
              )}
            </label>
            <input
              type='text'
              placeholder='Additional Information'
              {...register('additional')}
            />
          </div>
          <div className={styles.rightside_checkout}>
            <div className={styles.total_container}>
              <div className={styles.leftside}>
                <h4>Product</h4>
                {list?.map((elem) => (
                  <p className={styles.product_info} key={elem.id}>
                    {elem.name}{' '}
                    <span>
                      {' x '}
                      {elem.quantity}
                    </span>
                  </p>
                ))}
                <p>Subtotal</p>
                <p>Total</p>
              </div>
              <div className={styles.rightside}>
                <h4>Subtotal</h4>
                {list?.map((elem) => (
                  <p className={styles.subtotal} key={elem.id}>
                    {'Rs. '}
                    {elem.price}
                  </p>
                ))}
                <p className={styles.subtotal}>
                  {'Rs. '} {subtotal}
                </p>
                <p className={styles.products_total}>
                  {'Rs. '} {total}
                </p>
              </div>
            </div>

            <div>
              <input
                type='radio'
                name='pay'
                id='bank'
                value='bank_transfer'
                className={styles.bank_radion}
                {...register('transaction', {
                  required: 'Choose your payment method',
                })}
              />
              <label htmlFor='bank' className={styles.radio_text}>
                Direct Bank Transfer
              </label>
              <p className={styles.bankTransfer_info}>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <input
                type='radio'
                name='pay'
                id='cash'
                value='by_cash'
                {...register('transaction', {
                  required: 'Choose your payment method',
                })}
              />
              <label htmlFor='cash' className={styles.radio_text}>
                Cash On Delivery
              </label>
              <p className={styles.privacy}>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{' '}
                <strong>privacy policy.</strong>
              </p>
              {errors.transaction && (
                <p className={styles.attention_message}>
                  {errors.transaction.message}
                </p>
              )}
            </div>
            <button type='submit'>Place Order</button>
          </div>
        </form>
      </section>
    </>
  )
}

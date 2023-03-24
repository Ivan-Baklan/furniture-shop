import React from 'react'

import Image from 'next/image'
import addressSVG from '../../../public/pictures/icons/contactPage/address.svg'
import phoneSVG from '../../../public/pictures/icons/contactPage/phone.svg'
import timeSVG from '../../../public/pictures/icons/contactPage/WorkingTime.svg'
import ContactForm from '@/components/ContactForm/ContactForm'
import HeroSection from '@/components/HeroSection/HeroSection'
import Progress from '@/components/Progress/Progress'
import styles from './page.module.scss'

export default function Contact() {
  return (
    <>
      <HeroSection title={'Contact'} />
      <section className={styles.contactUs_section}>
        <div className={styles.heading}>
          <h3>Get In Touch With Us</h3>
          <p>
            For More Information About Our Product {'&'} Services. Please Feel
            Free To Drop Us An Email. Our Staff Always Be There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <h4>
              <span>
                <Image src={addressSVG} />
              </span>
              Address
            </h4>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className={styles.companyInfo}>
            <h4>
              <span>
                <Image src={phoneSVG} />
              </span>
              Phone
            </h4>
            <p>
              Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
            </p>
          </div>
          <div className={styles.companyInfo}>
            <h4>
              <span>
                <Image src={timeSVG} />
              </span>
              Working Time
            </h4>
            <p>
              Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
      <Progress />
    </>
  )
}

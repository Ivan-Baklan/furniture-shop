import React from 'react'
import styles from './Progress.module.scss'

export default function Progress() {
  return (
    <section className={styles.progress_section}>
      <div className={styles.section_wrapper}>
        <div className={styles.progress_item}>
          <h4>Free Delivery</h4>
          <p>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className={styles.progress_item}>
          <h4>90 Days Return</h4>
          <p>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className={styles.progress_item}>
          <h4>Secure Payment</h4>
          <p>100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
    </section>
  )
}

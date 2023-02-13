import React from 'react'
import styles from './Block.module.css'

function Block({images, name}) {
  return (
    <div className={styles.card}>
      <div className={styles.max}><img className={styles.imgMax} src={images[0]} alt="photo"/></div>
      <div className={styles.mini}>
        <img className={styles.imgMini}  src={images[1]} alt="photo" />
        <img className={styles.imgMini}  src={images[2]} alt="photo" />
        <img className={styles.imgMini}  src={images[3]} alt="photo" />
      </div>

      <center style={{marginTop: '20px'}}><h4>{name}</h4></center>
    </div>

  )
}

export default Block
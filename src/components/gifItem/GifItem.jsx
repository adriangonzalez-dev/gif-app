import React from 'react'
import CopyGift from '../copy-to-Clipboard/CopyGift';
import styles from './GifItem.module.css'

const GifItem = ({title,image}) => {
  return (
      <div className={styles.card_item}>
          <img src={image} alt={title} className={styles.card_image}/>
          <h4 className={styles.card_title}>{title}</h4>
          <CopyGift url={image}/>
      </div>
  )
}

export default GifItem
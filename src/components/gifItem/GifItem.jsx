import React from 'react'
import CopyGift from '../copy-to-Clipboard/CopyGift'

const GifItem = ({title,image}) => {
  return (
      <div>
          <img src={image} alt={title} />
          <h4>{title}</h4>
          <CopyGift url={image}/>
      </div>
  )
}

export default GifItem
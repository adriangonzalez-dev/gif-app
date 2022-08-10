import React from 'react'

const GifItem = ({title,image}) => {
  return (
      <div>
          <img src={image} alt={title} />
          <h4>{title}</h4>
      </div>
  )
}

export default GifItem
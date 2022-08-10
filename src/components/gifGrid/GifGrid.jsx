import React,{useEffect,useState} from 'react';
import {getGifs} from '../../helpers/getGifs'
import useFetchGif from '../../hooks/useFetchGif';
import GifItem from '../gifItem/GifItem';



const GifGrid =({category}) => {

  const {images, isLoading} = useFetchGif(category)

    return (
    <div>
        <h3>{category}</h3> 
        { isLoading && <h2>Cargando...</h2> }
          {images.map(image=>{
            return (
              <GifItem key={image.id}
                title={image.title}
                image={image.url}
              />
            )
          })}
    </div>
  )
}

export default GifGrid
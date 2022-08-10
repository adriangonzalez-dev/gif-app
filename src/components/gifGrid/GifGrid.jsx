import useFetchGif from '../../hooks/useFetchGif';
import GifItem from '../gifItem/GifItem';
import styles from './GifGrid.module.css'



const GifGrid =({category}) => {

  const {images, isLoading} = useFetchGif(category)

    return (
      <>
      <h3 className={styles._3_category}>{category}</h3> 
      <div className={styles.categoryContainer}>
          
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
      </>
  )
}

export default GifGrid
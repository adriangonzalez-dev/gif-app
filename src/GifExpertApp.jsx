import React,{useState} from 'react';
import AddCategory from './components/addCategory/AddCategory';
import GifGrid from './components/gifGrid/GifGrid';
import styles from './GifExpertApp.module.css'
import './styles.css'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const addOnCategory =(value)=>{
        if(!categories.includes(value)){
            setCategories([value, ...categories])
        }
    }


  return (

    <div className={styles.body}>
        <h1 className={styles._h1}>Gif App!</h1>

        <AddCategory handlerCategory={addOnCategory}/>

        <div className={styles.categoryContainer}>
            {categories.map((category)=>
                            <GifGrid
                            key={category}
                            category={category}
                            />)}
        </div>

    </div>
  )
};

export default GifExpertApp;
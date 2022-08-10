import React,{useState} from 'react';
import AddCategory from './components/addCategory/AddCategory';
import GifGrid from './components/gifGrid/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const addOnCategory =(value)=>{
        if(!categories.includes(value)){
            setCategories([value, ...categories])
        }
    }


  return (

    <>
        {/*Titulo */}
        <h2>GifExpertApp</h2>

        {/*Input */}
        <AddCategory handlerCategory={addOnCategory}/>


        {/*Listado de Gif */}
        <ul>
            {categories.map((category)=>
                            <GifGrid
                            key={category}
                            category={category}
                            />)}
        </ul>
            {/*Gif Item */}

    </>
  )
};

export default GifExpertApp;
import React,{useState} from 'react';
import styles from './AddCategory.module.css'

const AddCategory = ({handlerCategory}) => {


    const [inputValue, setInputValue] = useState('')

    const inputValueChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length >= 1){

            handlerCategory(inputValue);
        }
        setInputValue('')
    }


  return (
    <form onSubmit={(e)=>handlerSubmit(e)} className={styles.form}>
        <input 
            required='required'
            type="text"
            className={styles._input}
            value={inputValue}
            onChange={(e)=>inputValueChange(e)}
        />
        <span className={styles._span}>
            Buscar Gif's
        </span>
        <i className={styles._i}></i>
    </form>
  )
}

export default AddCategory
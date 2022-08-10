import React,{useState} from 'react'

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
    <form onSubmit={(e)=>handlerSubmit(e)}>
        <input 
            type="text"
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={(e)=>inputValueChange(e)}
        />
    </form>
  )
}

export default AddCategory
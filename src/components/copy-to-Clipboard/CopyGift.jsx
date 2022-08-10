import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Swal from 'sweetalert2'

const handlerClick = () =>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Link copiado al portapapeles!',
        showConfirmButton: false,
        timer: 1500
      })
}

const CopyGift = ({url}) => {

  return (
    <div>
        <CopyToClipboard text={url}>
            <p onClick={handlerClick}><i class="fa-solid fa-copy"></i> Copiar link! </p>
        </CopyToClipboard>
        <div>
            <a href={`http://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" ><i class="fa-brands fa-facebook"></i></a>
            <a href={`https://api.whatsapp.com/send?text=${url}`} target="_blank" rel="noopener noreferrer" ><i class="fa-brands fa-whatsapp"></i></a>
        </div>
    </div>
  )
}

export default CopyGift
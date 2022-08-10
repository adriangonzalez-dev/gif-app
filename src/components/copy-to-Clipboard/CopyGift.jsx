import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Swal from 'sweetalert2'
import styles from './CopyGift.module.css'

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
    <div className={styles.copyContainer}>
        <CopyToClipboard text={url}>
            <p onClick={handlerClick} className={styles.copy_link}><i className="fa-solid fa-copy"></i> Copiar link! </p>
        </CopyToClipboard>
        <div className={styles.rrssContainer}>
            <p>Compartir: </p>
            <a href={`http://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" className={styles._a} >
              <i className={`fa-brands fa-facebook ${styles.icon_f}`}></i>
            </a>
            <a href={`https://api.whatsapp.com/send?text=${url}`} target="_blank" rel="noopener noreferrer" className={styles._a}>
              <i className={`fa-brands fa-whatsapp ${styles.icon_w}`}></i>
            </a>
        </div>
    </div>
  )
}

export default CopyGift
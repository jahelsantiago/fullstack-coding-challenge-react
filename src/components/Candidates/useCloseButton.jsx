import React, {useState} from 'react';
import styles from "./closeButton.module.css"

function UseCloseButton() {
    const [open, setOpen] = useState(true)

    const button =  (
        <div className={styles.container} onClick={()=>{setOpen(prev=>!prev)}}>
            <div className={open?styles.open:styles.close} >
                {open? "Ocultar Candidatos":"ver candidatos"}
            </div>
        </div>
    );

    return [button, open];
}

export default UseCloseButton;
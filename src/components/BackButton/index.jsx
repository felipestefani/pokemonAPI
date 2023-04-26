import { BsArrowLeftCircle } from "react-icons/bs";
import styles from './styles.module.css'
import { useState } from "react";

const BackButton = (props) => {
    const {color, action} = props
    const [buttonColor, setButtonColor] = useState(color)

    return(
        <BsArrowLeftCircle 
            size={'40px'} 
            color={buttonColor} 
            onClick={action} 
            cursor={'pointer'} 
            className={styles.back_button} 
            onMouseOver={ () => setButtonColor(`#AA00FF`)} 
            onMouseOut={()=>setButtonColor(color)} 
        />
    )
}

export default BackButton
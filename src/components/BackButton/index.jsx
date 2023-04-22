import { BsArrowLeftCircle } from "react-icons/bs";
import styles from './styles.module.css'

const BackButton = (props) => {
    const {color, action} = props
    return(
        <BsArrowLeftCircle size={'40px'} color={color?color:'#4c508e'} onClick={action} cursor={'pointer'} className={styles.back_button}/>
    )
}

export default BackButton
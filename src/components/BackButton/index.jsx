import styles from './styles.module.css'
import { BsArrowLeftCircle } from "react-icons/bs";

const BackButton = (props) => {
    const {color, action} = props
    return(
        <BsArrowLeftCircle size={'40px'} color={color?color:'#AA00FF'} onClick={action} cursor={'pointer'} />
    )
}

export default BackButton
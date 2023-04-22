import { Link } from "react-router-dom";
import { POKEMON_DETAILS } from "../../services/urls";
import styles from './styles.module.css'


const Card = (props) => {
    const {pokemon} = props

    return (
        <Link to={POKEMON_DETAILS} state={{url: pokemon.url}} className={`${styles.card_container}`} >
            <p>{pokemon.name}</p>
        </Link>
    )
}

export default Card
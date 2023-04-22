import { Link } from "react-router-dom";
import { POKEMON_DETAILS } from "../../services/urls";
import styles from './styles.module.css'

const Card = (props) => {
    const {pokemon} = props

    return (
        <div className={`${styles.card_container}`}>
            <Link to={POKEMON_DETAILS} state={{url: pokemon.url}}>{pokemon.name}</Link>
        </div>
    )
}

export default Card
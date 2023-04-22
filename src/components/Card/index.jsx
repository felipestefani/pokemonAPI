import { Link, useNavigate } from "react-router-dom";
import { HOME, POKEMON_DETAILS } from "../../services/urls";
import styles from './styles.module.css'

const Card = (props) => {
    const navigate = useNavigate()
    const {pokemon} = props

    return (
        <div className={`${styles.card_container}`}>
            <button onClick={() => navigate(HOME)}>Voltar</button>
            <Link to={POKEMON_DETAILS} state={{url: pokemon.url}}>{pokemon.name}</Link>
        </div>
    )
}

export default Card
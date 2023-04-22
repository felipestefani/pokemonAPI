import { Link, useNavigate } from "react-router-dom";
import { HOME, POKEMON_DETAILS } from "../../services/urls";

const Card = (props) => {
    const navigate = useNavigate()
    const {pokemon} = props

    return (
        <div style={{margin:'20px 0', border: '1px solid black', padding:'10px'}}>
            <button onClick={() => navigate(HOME)}>Voltar</button>
            <Link to={POKEMON_DETAILS} state={{url: pokemon.url}}>{pokemon.name}</Link>
        </div>
    )
}

export default Card
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate()
    const {pokemon} = props

    return (
        <div style={{margin:'20px 0', border: '1px solid black', padding:'10px'}}>
            <button onClick={() => navigate('/pokemonAPI')}>Voltar</button>
            <Link to={'/pokemon/details'} state={{url: pokemon.url}}>{pokemon.name}</Link>
        </div>
    )
}

export default Card
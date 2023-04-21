import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()

    const navigateAndCreate = (() => {
        localStorage.setItem('@pokemon_lastPage',1)
        navigate('/pokemons')
    } )
    
    return(
        <button onClick={() => navigateAndCreate()}>Pokemons</button>
    )
}

export default Home
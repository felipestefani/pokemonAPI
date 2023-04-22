import { useNavigate } from "react-router-dom";
import BaseTemplate from "../../templates/base-template";


const Home = () => {
    const navigate = useNavigate()

    const navigateAndCreate = (() => {
        localStorage.setItem('@pokemon_lastPage',1)
        navigate('/pokemons')
    } )
    
    return(
        <BaseTemplate>
            <button onClick={() => navigateAndCreate()}>Pokemons</button>
        </BaseTemplate>
    )
}

export default Home
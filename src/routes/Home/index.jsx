import { useNavigate } from "react-router-dom";
import BaseTemplate from "../../templates/base-template";
import styles from './styles.module.css'
import { POKEMONS } from "../../services/urls";


const Home = () => {
    const navigate = useNavigate()

    const navigateAndCreate = (() => {
        localStorage.setItem('@pokemon_lastPage',1)
        navigate(POKEMONS)
    } )
    
    return(
        <BaseTemplate>
            <div className={styles.container}>
                <button onClick={() => navigateAndCreate()} >Pokemons</button>
            </div>    
        </BaseTemplate>
    )
}

export default Home
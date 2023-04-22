import { useNavigate, useLocation } from "react-router-dom"
import api from "../../services"
import { useEffect, useState } from "react"
import BackButton from "../../components/BackButton";
import { CircularProgress } from "@mui/material";
import { POKEMONS } from "../../services/urls";
import BaseTemplate from "../../templates/base-template";
import styles from './styles.module.css'


const PokemonDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { url } = location.state
    
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [imgPokemon, setImgPokemon] = useState('')
    const [loading, setLoading] = useState(false)

    const getPokemonDetails = async () => {
        try {
            setLoading(true)
            const { data } = await api.get(url)
            setPokemonDetails(data)
            setImgPokemon(data.sprites.other.dream_world.front_default)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getPokemonDetails()
    },[])

    return(
        <div>
            <BaseTemplate>
            {loading?
                <CircularProgress style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} />
                :
                <div className={styles.detailsContainer}>
                    <div>
                        <BackButton action={()=>navigate(POKEMONS)} color={'#AAFFFF'} />
                    </div>
                    <div>
                    <h1>{pokemonDetails.name}</h1>
                    <img src={imgPokemon} alt={pokemonDetails.name} />
                    </div>
                </div>}
            </BaseTemplate>
        </div>
    )
}

export default PokemonDetails
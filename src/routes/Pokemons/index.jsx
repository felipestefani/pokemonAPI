import { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services";
import Pagin from "../../components/Pagin";
import CircularProgress from '@mui/material/CircularProgress';
import BaseTemplate from "../../templates/base-template";
import styles from './styles.module.css'
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../services/urls";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(localStorage.getItem('@pokemon_lastPage'))
    const navigate = useNavigate()
    const limit = 10
    const offset = (page-1)*limit

    const getPokemons = async () => {
        try{
            setLoading(true)
            const { data } = await api.get(`/pokemon?offset=${offset}&limit=${limit}`)
            setPokemons(data.results)
            setCount(data.count)
        } catch(e) {
            console.log(e);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getPokemons()
    },[page])

    return (
        <div>
            <BaseTemplate>
                {loading ?
                    <CircularProgress style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} />
                :
                <div className={styles.container}>
                    <div className={styles.button_container}>
                        <BackButton action={()=>navigate(HOME)} color={'#ffff00d2'} />
                    </div>
                    <ul className={`${styles.listContainer}`}>
                        {pokemons.map((pokemon) => (
                                <Card pokemon={pokemon} key={pokemon.url} />
                        ))}
                    </ul>
                    <Pagin count={count} limit={limit} setPage={setPage}/>
                </div>}
            </BaseTemplate>
        </div>
    )
}

export default Pokemons
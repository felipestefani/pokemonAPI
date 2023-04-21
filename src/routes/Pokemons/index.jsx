import { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services";
import Pagin from "../../components/Pagin";
import CircularProgress from '@mui/material/CircularProgress';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(localStorage.getItem('@pokemon_lastPage'))
    const limit = 5
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
            {loading?<CircularProgress />:
            <ul>
                {pokemons.map((pokemon) => (
                        <Card pokemon={pokemon} key={pokemon.url} />
                ))}
            </ul>}
            <Pagin count={count} limit={limit} setPage={setPage}/>
        </div>
    )
}

export default Pokemons
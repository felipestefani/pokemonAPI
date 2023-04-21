import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services";

const Home = () => {
    const navigate = useNavigate()
    const getBase = async () => {
        try {
            const {data} = await api.get('/')
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        getBase()
    }, [])
    
    return(
        <button onClick={() => navigate('/pokemons')}>Pokemons</button>
    )
}

export default Home
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Pokemons from "./routes/Pokemons";
import PokemonDetails from "./routes/PokemonDetails";
import * as routes from "./services/urls";

const App = () => {
  return(
    // {/*O Contexto envolve toda a aplicação, então deve vir por fora de tudo*/}
    <BrowserRouter>
    {/* caso deseje utilizar um template no App, as rotas devem ficar envolvidas (ou ainda deve ser visto o melhor lugar para incluir - talvez no componente) */}
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.POKEMONS} element={<Pokemons />} />
        <Route path={routes.POKEMON_DETAILS} element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
)}

export default App
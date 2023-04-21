import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Pokemons from "./routes/Pokemons";
import PokemonDetails from "./routes/PokemonDetails";

const App = () => {
  return(
    // {/*O Contexto envolve toda a aplicação, então deve vir por fora de tudo*/}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* caso deseje utilizar um template no App, as rotas devem ficar envolvidas (ou ainda deve ser visto o melhor lugar para incluir - talvez no componente) */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path='/pokemon/details' element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
)}

export default App
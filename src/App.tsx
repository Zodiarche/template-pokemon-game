import { useState, useEffect } from "react";
import getDataForAllPokemon from "./utils/data/data";
import { PokemonData } from "./utils/data/interfaceDataGame";

import Header from "./components/header";
import Pokedex from "./components/pokedex";
import Footer from "./components/footer";

import "./assets/stylesheets/main.css";

const App = () => {
  const [pokedexData, setPokedexData] = useState<PokemonData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataForAllPokemon();
      if (!data) return;

      setPokedexData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="wrapper">
        <Header />

        <main id="main">
          <Pokedex pokedexData={pokedexData} />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default App;

import { useState, useEffect } from "react";
import getDataForAllPokemon from "./utils/data/data";
import { PokemonData } from "./utils/data/interfaceDataGame";

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
        <header id="header">
          <div className="wrapper">
            <div className="cols">
              <div className="col-l"></div>
              <div className="col-r">
                <nav>
                  <ul></ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main id="main">
          <section id="main-section">
            <div className="wrapper">
              <div className="pokedex">
                <table>
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Forme</th>
                      <th>Type 1</th>
                      <th>Type 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokedexData &&
                      pokedexData.map((pokemon, index) => (
                        <tr key={index}>
                          <td>{pokemon.dbSymbol}</td>
                          <td>{pokemon.characteristics.form}</td>
                          <td>{pokemon.types.type1}</td>
                          <td>{pokemon.types.type2}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer id="footer">
        <div className="wrapper">
          <div id="footer-top"></div>
          <div id="footer-botttom"></div>
        </div>
      </footer>
    </>
  );
};

export default App;

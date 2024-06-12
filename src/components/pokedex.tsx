import React from "react";
import { PokemonData } from "../utils/data/interfaceDataGame";

interface PokedexProps {
  pokedexData: PokemonData[];
}

const Pokedex: React.FC<PokedexProps> = ({ pokedexData }) => {
  return (
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
              {pokedexData.map((pokemon, index) => (
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
  );
};

export default Pokedex;

import React, { useContext } from "react";
import PokemonType from "../PokemonType";
import { useSelector, useDispatch } from "react-redux";

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.selectedPokemon);
  return selectedPokemon ? (
    <div>
      <h1>{selectedPokemon.english}</h1>
      <table>
        {Object.keys(selectedPokemon.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{selectedPokemon.base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;

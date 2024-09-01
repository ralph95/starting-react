import React, { useContext } from "react";
import PokemonRow from "./PokemonRow";
import { useSelector, useDispatch } from "react-redux";

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const filter = useSelector((state) => state.filter);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((p) =>
            p.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .map((p) => (
            <PokemonRow
              pokemon={p}
              key={p.id} // Use p.id directly as the key
              onSelect={() =>
                dispatch({ type: "SET_SELECTED_POKEMON", payload: p })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;

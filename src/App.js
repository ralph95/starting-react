import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import pokemon from "./pokemon.json";

const PokemonRow = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(",")}</td>
  </tr>
);

//Ensure that the data receive to the component has correct set of data values. Creating a restriction
PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title"> Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((pokemon) => (
            <PokemonRow pokemon={pokemon} key={[pokemon.id]} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

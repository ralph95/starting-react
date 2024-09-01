import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

import PokemonType from "./PokemonType";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";

// Reducer function
const pokemonReducer = (
  state = {
    pokemon: [],
    filter: "",
    selectedPokemon: null,
  },
  action
) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return state;
  }
};

// Correctly configure the store
const store = configureStore({
  reducer: pokemonReducer,
});

// Ensure that the data received are from PokemonInfo data
PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

// Creation of emotion styled css
const Title = styled.h1`
  text-align: center;
`;

const TwoColunmLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

// Starting the Application
function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  React.useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "SET_POKEMON", payload: data }));
  }, [dispatch]);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <Container>
      <Title className="title"> Pokemon Search</Title>
      <TwoColunmLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColunmLayout>
    </Container>
  );
}

// Wrapping the App with Provider
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

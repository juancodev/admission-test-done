import Routes from "./Routes";
import "./App.css";
import Text from "./components/Text";
import EnhancedTable from "./components/Table";
import Dialog from "./components/Dialog";
import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

function App() {
  const [tableRows, setTableRows] = React.useState([]);
  const [pokemonTypesOptions, setPokemonTypesOptions] = React.useState([]);

  const handleUpdatePokemonRow = ({ id_pokemon, fields }) => {
    const { my_name, my_description, my_types, my_teammates, my_sprite } =
      fields;
  };

  return (
    <div className="App">
      <Routes
        tableRows={tableRows}
        pokemonTypesOptions={pokemonTypesOptions}
        handleUpdatePokemonRow={handleUpdatePokemonRow}
      />
      <Outlet />
    </div>
  );
}

export default App;

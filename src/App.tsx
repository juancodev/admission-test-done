import React from "react";
import "./App.css";
import Routes from "./Routes";
import Text from "./components/Text";
import EnhancedTable from "./components/Table";
import Dialog from "./components/Dialog";
import axios from "axios";
import { Outlet } from "react-router-dom";

type UpdatePokemonRow = {
  id_pokemon?: number;
  fields: {
    my_name: string;
    my_description: string;
    my_types: string;
    my_teammates: string;
    my_sprite: string;
  };
};

function App(): JSX.Element {
  const [tableRows, setTableRows] = React.useState<[]>([]);
  const [pokemonTypesOptions, setPokemonTypesOptions] = React.useState<[]>([]);

  const handleUpdatePokemonRow = ({ id_pokemon, fields }: UpdatePokemonRow) => {
    const { my_name, my_description, my_types, my_teammates, my_sprite } =
      fields;
    return {
      id_pokemon,
      my_name,
      my_description,
      my_types,
      my_teammates,
      my_sprite,
    };
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

import React, { useEffect } from "react";

import Home from "./containers/Home";
import Form from "./containers/Form";
import { Route, Routes, Outlet } from "react-router-dom";

export default function MyRoutes(props) {
  const { tableRows, pokemonTypesOptions, handleUpdatePokemonRow } = props;

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Home tableRows={tableRows} />} />
          <Route
            path="home"
            element={<Form pokemonTypesOptions={pokemonTypesOptions} />}
          />
          <Route
            path="" // ? wich path?
            element={
              <Form
                pokemonTypesOptions={pokemonTypesOptions}
                tableRows={tableRows}
                handleUpdatePokemonRow={handleUpdatePokemonRow}
              />
            }
          />
          <Route index path="*" element={<Home tableRows={tableRows} />} />
        </Route>
      </Routes>
    </div>
  );
}

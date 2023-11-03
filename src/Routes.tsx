// import React, { useEffect } from "react";
import { RoutesProps } from "./types/types";

import Home from "./containers/Home";
import Form from "./containers/Form";
import { Route, Routes, Outlet } from "react-router-dom";

export default function MyRoutes({
  tableRows,
  pokemonTypesOptions,
  handleUpdatePokemonRow,
}: RoutesProps): JSX.Element | JSX.Element[] {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home tableRows={tableRows} />} />
        <Route
          path="home"
          element={<Form pokemonTypesOptions={pokemonTypesOptions} />}
        />
        <Route
          path="" // ? which path?
          element={
            <Form
              pokemonTypesOptions={pokemonTypesOptions}
              tableRows={tableRows}
              handleUpdatePokemonRow={handleUpdatePokemonRow}
            />
          }
        />
        <Route path="*" element={<Home tableRows={tableRows} />} />
      </Routes>
    </div>
  );
}

export declare interface PokemonRow {
  id_pokemon: number;
  fields: object;
}

export declare interface RoutesProps {
  tableRows?: [];
  pokemonTypesOptions?: [];
  handleUpdatePokemonRow?: ({ id_pokemon, fields }: PokemonRow) => {};
}

export declare interface LabelDefaultValueProps {
  label?: string;
  defaultValue: string | string[] | number;
}
import { RoutesProps } from "../types/types";
import Text from "../components/Text";
import SelectComponents from "../components/Select";
import ImageList from "../components/ImageList";
import { useNavigate, useLocation } from "react-router-dom";

// * use spritesTitles to set the titles to Images

const spriteTitles = {
  back_default: "Macho posterior",
  back_female: "Hembra posterior",
  back_shiny: "Macho brillante posterior",
  back_shiny_female: "Hembra brillante posterior",
  front_default: "Macho frontal",
  front_female: "Hembra frontal",
  front_shiny: "Macho frontal brillante",
  front_shiny_female: "Hembra frontal brillante",
};

const foundPokemon = {
  my_name: "Pikachu",
  my_types: ["Electric"],
  my_teammates: ["Charizard"],
  my_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
};

export default function Form({
  pokemonTypesOptions,
  tableRows,
  handleUpdatePokemonRow,
}: RoutesProps) {
  const location = useLocation();
  // * Use navigate to return root path
  const navigate = useNavigate();
  const { sprites, id_pokemon } = location.state;

  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handleUpdatePokemonRow({});
  };

  return (
    <form>
      <Text label={"New name"} defaultValue={foundPokemon.my_name} />

      <SelectComponents
        label={"New type"}
        defaultValue={foundPokemon.my_types}
      />
      <SelectComponents
        label={"Best teammate"}
        defaultValue={foundPokemon.my_teammates}
      />

      <ImageList defaultValue={foundPokemon.my_sprite} />

      <button>Submit</button>
    </form>
  );
}

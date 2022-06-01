# This is the SmartCompliance admission test v0.0.1

<!-- Please read all the tasks before start -->

<!-- TODO: AJAX -->

1. Use the next API to obtain data https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0 this API gives you the data in the subsequent format:
   data.results = [{
   name: '',
   url: '',
   }, ...]
   From the url attribute you can fetch the pokemon data, from that data extract the following attributes:
   types, weight, height, id, name and sprites.

2. Now you have the data and its time to use it

<!-- TODO: TABLES -->

1. Modify the previous fetched data to be shown in the table with this columns:
   .1. Imagen del pokemon (from sprites obtain the front_default sprite)
   .2. Número en Pokedex
   .3. Nombre
   .4. Tipo (Si el pokemon tiene muchos tipos coloque todos los tipos en una lista)
   .5. Altura
   .6. Peso
   .7. Button column to edit a specific pokemon (details in next TODO)
   .8. Checkbox column that changes the Pokemon to Your Pokemon created in next TODO
2. Checkout the Table.js in components folder and improve it to:
.1. When button with id 'search-button' is clicked the search applies
.2. When row is clicked show all the sprites inside Dialog.js (Refactor Dialog.js to work with this featue) with the next internal structure:
<div>
 <figure>
<img />
<figcaption><!-- Name of the view, Ex: Vista frontal (masculino) --> </figcaption>
</figure>
<!-- ... Others imgs -->
</div>
3. Add a button in the table to edit the pokemon attributes, when button is clicked a new route is rendered with the following path "/form/${index_of_pokemon}"

<!-- TODO: FORMS -->

1. Check the components folders and find:
   .1. Text.js <!-- optimize this component -->
   .2. Select.js
   .3. Checkbox.js
2. Create a form component to change the pokemon attributes that handles the nexts fields:
   .1. New name of the pokemon
   .2. Description of the change
   .3. New type of the pokemon (you can obtain the options types from here https://pokeapi.co/api/v2/type/)
   .4. Best teammate of the pokemon: make a selector dependency of the previous selection types of your Pokemon where the options are all the pokemons that match with the selected types
   .5. New view of the pokemon: make an img selector of the pokemon that shows all the assets and we can select 1 of those.
3. When this form is rendered set the default values if there is a Pokemon already created for this pokemon (Ex: if we already create an bulbasaur when we click in the row of bulbasour edit button render ours bulbasaur names, description, new types, etc.)
4. Add a submit button to save your new Pokemon.

<!-- TODO: CSS TIME -->

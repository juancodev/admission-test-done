# This is the SmartCompliance admission test v0.0.1

<!-- Please read all the tasks before start -->
<!-- Recomendation: do the optional tasks after complete all other tasks -->

<!-- TODO: AJAX -->

1. Use the next API to obtain data https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0 this API gives you the data in the subsequent format:
   data.results = [{
   name: '',
   url: '',
   }, ...]
   From the url attribute you can fetch the pokemon data, from that data extract the following attributes:
   types, weight, height, id, name and sprites.
2. Create and use a Loading component to render while the data loads

3. Now you have the data and its time to use it

<!-- TODO: TABLES -->

1. Take a look of Table.js (this would help) and modify the previous fetched data to be shown in the table with this columns:
   .1. Checkbox column that changes the Pokemon to Your Pokemon created in next TODO
   .2. Edit button (details in next TODO)
   .3. Foto (from sprites obtain the front_default sprite) <!-- A simple img tag  -->
   .4. Número en Pokedex
   .5. Nombre
   .6. Tipo (with this structure: <ul> <li> <!-- Type 1 --> </li> <li><!-- Type 2 --></li> ...</ul>)
   .7. Amigos
   .8. Altura
   .9. Peso
   .10. Descripción
2. Checkout the Table.js in components folder and improve it to:
.1. OPTIONAL: Add a text field and a button with to search a Pokemon
.2. OPTIONAL: When row is clicked show all the sprites inside Dialog.js (Refactor Dialog.js to work with this featue) with the next internal structure:
<div>
 <figure>
<img />
<figcaption><!-- Name of the view, Ex: Vista frontal (masculino) --> </figcaption>
</figure>
<!-- ... Others imgs -->
</div>
3. The edit button in each row of the table when is clicked a new route is rendered with the following path "/form/${name of the clicked pokemon}"

<!-- TODO: FORMS -->

1. Check the components folders, find and refactor the following components:
   .1. Text.js
   .2. Select.js
   .3. ImageList
2. Create a form component to change the pokemon attributes that handles the nexts fields:
   .1. New name of the pokemon
   .2. Description of the change (Make this text input to have 5 lines)
   .3. New type of the pokemon (you can obtain the options types from here https://pokeapi.co/api/v2/type/)
   .4. Best teammates of the pokemon: make a dynamic selector dependency of the previous selection types of your Pokemon where the options are all the pokemons that match with the selected types. Teammates only of the types of your Pokemon.
   .5. New view of the pokemon: make an img selector of the pokemon that shows all the assets and we can select 1 of those (use ImageList.js). Show the selected image with this style: { border: "3px solid red" }
3. When this form is rendered set the default values if there is a Pokemon already created for this pokemon (Ex: if we already create an bulbasaur when we click in the row of bulbasour edit button render ours bulbasaur names, description, new types, etc.)
4. Add a submit button to save your new Pokemon.

<!-- TODO: CSS TIME WILL COME LATER... MAYBE, BUT ITS IMPORTANT! -->

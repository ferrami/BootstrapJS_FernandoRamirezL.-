//API Random book taen from https://forum.freecodecamp.org/t/random-book-generator/221390. 

let library = document.getElementById("library");
let ramdomUser = document.getElementById("ramdomUser");
let pokemon = document.getElementById("pokeApi");
let apiLibrary = "https://api.airtable.com/v0/appybL1OJaEEIvAdS/Books?api_key=keymAugpaEvXsyGBr";
let apiRamdomUser = "https://randomuser.me/api/";
let apiPokemon = "https://pokeapi.co/api/v2/pokemon/1";


library.onclick = function() {

    fetch(apiLibrary) //URL
        .then(response => response.json()) //Formato sepador por funcion de flecha =>
        .then(data => {

            alert(JSON.stringify(data)) //la data es la promesa que les cumplio el API

        })


};


ramdomUser.onclick = function() {

    fetch(apiRamdomUser) //URL
        .then(response => response.json()) //Formato sepador por funcion de flecha =>
        .then(data => {

            alert(JSON.stringify(data)) //la data es la promesa que les cumplio el API

        })


};


pokemon.onclick = function() {

    fetch(apiPokemon) //URL
        .then(response => response.json()) //Formato sepador por funcion de flecha =>
        .then(data => {

            alert(JSON.stringify(data)) //la data es la promesa que les cumplio el API

        })


};
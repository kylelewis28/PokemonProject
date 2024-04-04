// Fetch the function for making the HTP request.
//JSON Style Date, Img, and Files 

fetchData("pikachu");

// charmander: A Lizard Pokémon.
// squirtle: A Tiny Turtle Pokémon.
// pikachu: A Mouse Pokémon.
// eevee: An Evolution Pokémon.
// mewtwo: A Genetic Pokémon.
// chikorita: A Leaf Pokémon.
// cyndaquil: A Fire Mouse Pokémon.
// totodile: A Big Jaw Pokémon.
// celebi: A Time Travel Pokémon.
// treecko: A Wood Gecko Pokémon.
// torchic: A Chick Pokémon.
// mudkip: A Mud Fish Pokémon.
// jirachi: A Wish Pokémon.
// turtwig: A Tiny Leaf Pokémon

async function fetchData(pokemonName){
//had struggles with this part
// should get a single object for me 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(function(response) {
        console.log(response);
        //given a promise from "Json file"
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = json.sprites.front_default;
    })

    


}



//Things to study:
//.then
//json file
//dot min
//ImgElement
//
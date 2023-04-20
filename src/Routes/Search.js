import LoadPokemon from "../Components/LoadPokemon";
import PokeCard from "../Components/PokeCard";

function getPokemon(pokemon) {
    if (pokemon === "") return

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(response => {
            if (!response.ok) throw new Error("Response was not OK!")
            document.querySelector("#message").innerText = "Success!"
            return response.json()
        })
        .then(pkmn => {
            document.querySelector("img").src = pkmn.sprites.front_default
            document.querySelector("#id").innerText = pkmn.id
            document.querySelector("#name").innerText = pkmn.name
            const primaryType = pkmn.types[0].type.name
            const secondaryType = pkmn.types[1]?.type.name
            document.querySelector("#type").innerText = secondaryType ? `${primaryType}/${secondaryType}` : primaryType
        })
        .catch(err => {
            document.querySelector("#message").innerText = err
            document.querySelector("#id").innerText = ""
            document.querySelector("#name").innerText = ""
            document.querySelector("img").src = ""
            document.querySelector("#type").innerText = ""
        })
}

function Search() {
    let arrayOf20PokemonsURLs = LoadPokemon();
    //console.log(arrayOf20PokemonsURLs[0]);

    let arrayOf20PokemonCards = [];
    for(let i = 0; i < 20; i++){
        arrayOf20PokemonCards.push(
            PokeCard(arrayOf20PokemonsURLs[i])
        );
    }
    console.log(arrayOf20PokemonCards)

    return (
        <table>
            <tr>
                {arrayOf20PokemonCards.slice(0,5)}
            </tr>
            <tr>
                {arrayOf20PokemonCards.slice(5,10)}
            </tr>
            <tr>
                {arrayOf20PokemonCards.slice(10,15)}
            </tr>
            <tr>
                {arrayOf20PokemonCards.slice(15,20)}
            </tr>
        </table>
    );
}

export default Search
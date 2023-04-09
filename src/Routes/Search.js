import LoadPokemon from "../Components/LoadPokemon";
import loadPokemon from "../Components/LoadPokemon";

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
    let arrayOf20Pokemons = LoadPokemon();
    console.log("array of 20 pokemons + " + arrayOf20Pokemons)
    return (
        <>
            <input type="text"/>
            {/*<button onClick="getPokemon(document.querySelector('input').value)">Submit</button>*/}

            <p>Request status: <span id="message"></span></p>
            <div>
                <img width="96" height="96"/>
                <p>Number: <span id="id"></span></p>
                <p>Name: <span id="name"></span></p>
                <p>Type: <span id="type"></span></p>
            </div>
        </>
    )
}

export default Search
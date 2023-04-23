async function GetAPI(props) {
    let returningResponse;
    let newArray = [];
    let pokeObjArray = [];


    const officialArt =

    returningResponse = await fetch(props)
    let v = await returningResponse.json()

    for (const pokemon of v.results) {
        newArray.push(await pokemon.url)
    }

    for (const pokemonURL of newArray) {
        let pokemon = await (await fetch(pokemonURL)).json()
        pokeObjArray.push(
            {
                name : pokemon.name,
                id : pokemon.id,
                src : pokemon.sprites.front_default,
                abilities: pokemon.abilities,
                moves: pokemon.moves,
                types: pokemon.types,
                weight: pokemon.weight,
                stats: pokemon.stats,
                official_artwork: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon.id + ".png"
            })
    }
    console.log("HERE!!!!",pokeObjArray)



    return pokeObjArray;
}

export default GetAPI;
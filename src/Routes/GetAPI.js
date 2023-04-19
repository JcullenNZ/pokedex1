async function GetAPI(props) {
    let returningResponse;
    let newArray = [];
    let newNewArray = [];

    returningResponse = await fetch(props)
    let v = await returningResponse.json()

    for (const pokemon of v.results) {
        newArray.push(await pokemon.url)
    }

    for (const pokemonURL of newArray) {
        let pokemon = await (await fetch(pokemonURL)).json()
        newNewArray.push(
            {
                name : pokemon.name,
                src : pokemon.sprites.front_default
            })
    }
    return newNewArray;
}

export default GetAPI;
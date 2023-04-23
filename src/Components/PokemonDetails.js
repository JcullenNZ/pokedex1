

function PokemonDetails({props}){
    if (props.stats === undefined) {
        console.log("undefined")
        return (<div>

        </div>)
    }

    return (
        <div className = "pokemonDetail">
            <img src = {props.official_artwork}/>
            <div>#{props.id}    {props.name}</div>
            <div>health: {props.stats[0].base_stat}</div>
            <div>attack: {props.stats[1].base_stat}</div>
            <div>defence: {props.stats[2].base_stat}</div>
            <div>special attack: {props.stats[3].base_stat}</div>
            <div>special defense: {props.stats[4].base_stat}</div>
            <div>types: {props.types[0].type.name + " " + (props.types.length === 2 ? props.types[1].type.name : "")}</div>
        </div>
    )
}

export default PokemonDetails;
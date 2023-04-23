import "./styles.css"

function PokemonDetails({props, id}){
    return (
        <div className = "pokemonDetail">
            <img src = {props.src}/>
            <div>#{props.id}    {props.name}</div>
        </div>
    )
}

export default PokemonDetails;
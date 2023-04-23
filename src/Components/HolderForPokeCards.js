import PokeCardSequel from "./PokeCardSequel";
import "./styles.css"

function HolderForPokeCards({props, onClick}) {
    let array = [];

    if(props === undefined)
        return;

    console.log(props)
    props.forEach((index) => {
        array.push(PokeCardSequel(index, onClick))
    })

    //console.log(onClick)

    return (
        <div>
            <div className="listOfPokemon">{array}</div>
            {/*<div className="pokemonDetail">{array[0]}</div>*/}
        </div>
    )
}

export default HolderForPokeCards;
import PokeCardSequel from "./PokeCardSequel";

function HolderForPokeCards(props) {
    let array = [];

    if(props === undefined)
        return;

    //console.log(props)
    props.props.forEach((index) => {
        array.push(PokeCardSequel(index))
    })

    return (
        <div>
            <div className="listOfPokemon">{array}</div>
            <div className="pokemonDetail"></div>

        </div>
    )
}

export default HolderForPokeCards;
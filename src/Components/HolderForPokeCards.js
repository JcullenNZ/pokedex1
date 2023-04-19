import PokeCardSequel from "./PokeCardSequel";

function HolderForPokeCards(props) {
    let array = [];

    if(props === undefined)
        return;

    console.log(props)
    props.props.forEach((index) => {
        array.push(PokeCardSequel(index))
    })

    return (
        <div>
            {array}
        </div>
    )
}

export default HolderForPokeCards;
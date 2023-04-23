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
            <>
                {array}
            </>

    )
}

export default HolderForPokeCards;
import {useState} from "react";
import PokeCardSingular from "./PokeCardSingular";

function PokeCard(pokemonURL){
    const [img, setImgSrc] = useState('');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState(false);

    if (pokemonURL === "") return

    fetch(pokemonURL)
        .then(response => {
        //if (!response.ok) throw new Error("Response was not OK!")
            console.log(response);
            return response.json();
    })
        .then(pkmn => {
            setImgSrc(pkmn.sprites.front_default);
            setId(pkmn.id);
            setName(pkmn.name);
            setType(pkmn.type);
    })
        .catch(err => {
            console.error('Error', err);
            //setState('error');
            setError(err);
    })
    return(
        <PokeCardSingular imgSrc ={img} number = {id} name = {name} type = {type}/>
    )
}



export default PokeCard;


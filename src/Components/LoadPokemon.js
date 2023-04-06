import {useEffect, useState} from "react";
import PokeCard from "./PokeCard";
import MakeCard from "./MakeCard";


/*function GetPokemon() {
    console.log("hello")
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
        .then(response => {
            if (!response.ok) throw new Error("Response was not OK!")
            return response.json();
        })
        .then(response => {
            console.log(response.results);
            return response.results;
        })

}*/

function RenderPokemons() {
    /*let pokemons = new Array(20);
    pokemons.push(0);
    pokemons = GetPokemon();
    pokemons.then(function (result){
        let array = result.results;
        return array;
    })
        .then()*/

    const [state, setState] = useState('');
    const [arrayOfURLS, setArray] = useState('');
    const [error, setError] = useState(false);

    useEffect(()=> {
        setState('loading');
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
            .then(response => {
                if (!response.ok) throw new Error("Response was not OK!")
                return response.json();
            }).then(response => {
            console.log(response);
            let pokemonsArray = '';
            for (let i = 0; i < response.results.length; i++) {

                pokemonsArray += (response.results[i].url)
                if(i<19)
                {
                    pokemonsArray += ', '
                }

            }
            setArray(pokemonsArray);
            setState('success');
            })
            .catch(err => {
                console.error('Error', err);
                setState('error');
                setError(err);
            })
    },[]);
    if (state === 'error'){
        return(
            <h1>
                {error.toString()}
            </h1>
        );
    }
    const urlsArray = arrayOfURLS.split(", ")
    console.log(urlsArray);
    //for(let i = 0; i < urlsArray; i++){
    return (<MakeCard />);
    PokeCard("https://pokeapi.co/api/v2/pokemon/1/",document)
    //PokeCard("https://pokeapi.co/api/v2/pokemon/1/")




        /*return{
            //<!-- {state === 'loading' ? (<h1>Loading</h1>) : (arrayOfURLS)} -->
        }*/
    //}


}
export default RenderPokemons;

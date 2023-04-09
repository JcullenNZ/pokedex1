import {useEffect, useState} from "react";

function LoadPokemon() {
    const [state, setState] = useState('');
    const [arrayOfURLS, setArray] = useState('');
    const [error, setError] = useState(false);
    //console.log("bbefors")

    useEffect(()=> {
        setState('loading');
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
            .then(response => {
                if (!response.ok) throw new Error("Response was not OK!")
                return response.json();
            }).then(response => {
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
    if (state === 'loading') {
        return <h1>Loading...</h1>
    }
    //return
    console.log(arrayOfURLS);
    const urlsArray = arrayOfURLS.split(", ")
    //console.log("Should Happen once followed by all the URLs!")
    console.log(urlsArray);
    return urlsArray;

}
export default LoadPokemon;

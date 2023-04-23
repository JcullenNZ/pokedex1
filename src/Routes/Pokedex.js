import GetAPI from "../Components/GetAPI";
import HolderForPokeCards from "../Components/HolderForPokeCards";
import {useEffect, useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";
import PokemonDetails from "../Components/PokemonDetails";
import "../Components/styles.css"

export default function Pokedex() {
    const [variable, setVariable] = useState([])
    const [state, setState] = useState("Loading")
    const [focusedPokemon, setFocusedPokemon] = useState("")

    function getIdClicked(props){
        setFocusedPokemon((props===focusedPokemon ? null : props))
        console.log(props)
    }

    //Load page of pokemon
    const [a, setA] = useState(0)
    useEffect( ()=>{
            GetAPI("https://pokeapi.co/api/v2/pokemon/?limit=20&offset="+(a*20))
                .then(result =>{
                setVariable(result)})
                .then(()=>{
                    wait(2000)
                .then(() =>setState("loaded"))
                        //.then(()=>{setFocusedPokemon(variable[0])}).then(()=>(console.log(variable)))
                })
        console.log(focusedPokemon)
    },[a, focusedPokemon])
    console.log(variable)

    if(state === "Loading")
    {
        return (
            <div>
                <img src="https://media.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif" />
            </div>
        )
    }

    return (
        <div>
            <h1>WELCOME TRAINER!</h1>
            <p>Here you will be able to look at all the pokemon!</p>
            <div className="pokemonContainer">
                <div className="pokemonGrid">
                    <HolderForPokeCards props = {variable} onClick={getIdClicked} />
                    <div className="buttonbar">
                    <button  onClick={()=>{setA(a>1 ? a-1 : 0)}}>ButtonPrevious</button>
                    <button  onClick={()=>{setA(a+1)}}>ButtonNext</button>
                    </div>
                </div>
                    <PokemonDetails props = {focusedPokemon}/>
            </div>
        </div>
    )
}
import GetAPI from "../Components/GetAPI";
import HolderForPokeCards from "../Components/HolderForPokeCards";
import {useEffect, useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";

export default function Pokedex() {
    const [variable, setVariable] = useState([])
    const [state, setState] = useState("Loading")

    //Load page of pokemon
    const [a, setA] = useState(0)
    useEffect( ()=>{
            GetAPI("https://pokeapi.co/api/v2/pokemon/?limit=20&offset="+(a*20))
                .then(result =>{
                setVariable(result)})
                .then(()=>{
                    wait(2000)
                .then(() =>setState("loaded") )

                })
    },[a])
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
            <HolderForPokeCards props = {variable}/>
            <button id = "button" onClick={()=>{setA(a>1 ? a-1 : 0)}}>ButtonPrevious</button>
            <button id = "button3" onClick={()=>{setA(a+1)}}>ButtonNext</button>
        </div>
    )
}
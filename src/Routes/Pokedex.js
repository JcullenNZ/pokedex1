import GetAPI from "./GetAPI";
import HolderForPokeCards from "../Components/HolderForPokeCards";
import {useEffect, useState} from "react";
import getAPI from "./GetAPI";

export default function Pokedex() {
    const [variable, setVariable] = useState([])
    useEffect( ()=>{
        async function GettingAPI(){
            setVariable(await GetAPI("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"))
        }
        GettingAPI();
    },[])
    console.log(variable)
    return (
        <div>
            <h1>WELCOME TRAINER!</h1>
            <p>Here you will be able to look at all the pokemon!</p>
            {/*{console.log(variable.results !== undefined ? console.log("something1 ") : console.log("something2"))}*/}
            <HolderForPokeCards props = {variable}/>
        </div>
    )
}
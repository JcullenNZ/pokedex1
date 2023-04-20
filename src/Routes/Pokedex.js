import GetAPI from "./GetAPI";
import HolderForPokeCards from "../Components/HolderForPokeCards";
import {useEffect, useState} from "react";

export default function Pokedex() {
    const [variable, setVariable] = useState([])
    const [a, setA] = useState(0)
    useEffect( ()=>{
            GetAPI("https://pokeapi.co/api/v2/pokemon/?limit=20&offset="+(a*20)).then(result =>{
                setVariable(result)
            })
    },[a])
    console.log(variable)

    return (
        <div>
            <h1>WELCOME TRAINER!</h1>
            <p>Here you will be able to look at all the pokemon!</p>
            {/*{console.log(variable.results !== undefined ? console.log("something1 ") : console.log("something2"))}*/}
            <HolderForPokeCards props = {variable}/>
            <button id = "button" onClick={()=>{setA(a>1 ? a-1 : 0)}}>ButtonPrevious</button>
            <button id = "button3" onClick={()=>{setA(a+1)}}>ButtonNext</button>
        </div>
    )
}
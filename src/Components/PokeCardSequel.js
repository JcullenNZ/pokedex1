function PokeCardSequel(props){
    return(
        <div>
            <img src = {props.src}/>
            <div>#{props.id}    {props.name}</div>
        </div>
    )
}

export default PokeCardSequel
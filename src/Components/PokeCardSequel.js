function PokeCardSequel(props, onClick){
    return(
        <div onClick = {()=>onClick(props.id+props.name)}>
            <img src = {props.src}/>
            <div>#{props.id}    {props.name}</div>
        </div>
    )
}

export default PokeCardSequel
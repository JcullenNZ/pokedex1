function PokeCardSequel(props, onClick){
    return(
        <div onClick = {()=>onClick(props)}>
            <img src = {props.src}/>
            <div>#{props.id}    {props.name}</div>
        </div>
    )
}

export default PokeCardSequel
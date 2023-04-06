import React from "react";

function Root(){
    return(
        <div>
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObA0J6qLocUawBowplxLq7x-ED-1A1RcgVOe6Y1e0URBPPZzcGWKWDduNQqGMUNpXd9o&usqp=CAU"/>
                    </div>
                    <li><a href="#pokedex">Pokedex</a></li>
                    <li><a href="#search">Find a pokemon</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Root;
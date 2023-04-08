import React from "react";
import "../index.css";
import { Link, Outlet } from "react-router-dom";


function Root(){
    return(
        <>
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObA0J6qLocUawBowplxLq7x-ED-1A1RcgVOe6Y1e0URBPPZzcGWKWDduNQqGMUNpXd9o&usqp=CAU"/>
                    </div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pokedex">Pokedex</Link></li>
                    <li><Link to="/search">Find a pokemon</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Root;
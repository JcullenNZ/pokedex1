import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from "react-router-dom"

import './index.css';

import App from "./App";
import Pokedex from "./Routes/Pokedex";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Search from "./Routes/Search";
import Content from "./Components/Content";
import Header from "./Components/Header";

const router = createHashRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/pokedex",
                element: <Pokedex />
            },
            {
                path: "/search",
                element: <Search />
            }
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

//<RenderPokemons />

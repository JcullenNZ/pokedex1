import React from 'react'
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter} from "react-router-dom";

const router = createHashRouter([
    {
        path: "/pokedex",
        element: <h1>Pokedex</h1>
    },
    {
        path: "/search",
        element: <h1>Search</h1>
    },
    {
        path: "/about",
        element: <h1>About</h1>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={{router}} />)

function App() {

}

export default App
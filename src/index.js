import React from "react";
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter"
import Navbar from "./components/navbar";
import Users from "./components/users";

const App = () => {
    return (
        <>
            <Navbar/>
            <Counter/>
            <Users/>
        </>
        )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
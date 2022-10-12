import React from "react";
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter"
import Navbar from "./components/navbar";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar/>
        <Counter/>
    </React.StrictMode>
);
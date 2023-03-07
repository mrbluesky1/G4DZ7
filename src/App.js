import React from "react";
import {useState} from "react";

export default function App() {
    const [show, hide] = useState(false)

    const handleClick = () => {
        hide(!show)
    }

    return(
        <div className="app">
            <div className="blue" onClick={handleClick} style={show ? {display: "none"} : {display: "block"}}></div>
            <div className="green" onClick={handleClick} style={show ? {display: "block"} : {display: "none"}}></div>
        </div>
    )
}
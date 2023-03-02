import React from "react";
import {useState} from "react";

export default function App() {
    const [name] = useState(['Арген', 'Максат', 'Жанылай'  ]);

    return(
        <ul>
            {name.map(name =>(
                <li key={name}>{name}</li>
            ))}
        </ul>
    )
}

import './App.css'
import React, {useEffect, useState} from "react";

import UserComponent from "./components/TodoComponents.tsx";
import {IUser} from "./components/TodoComponent.tsx";

function App() {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })

    },[])

    return (
            <div>{
                users.map(user => <UserComponent  key={user.id} item={user}/>)
            }</div>

        );
    };


export default App

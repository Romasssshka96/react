import React, {useEffect, useState} from 'react';
import {Todo} from "../../models/ITodo.ts";


const TodoComponent = () => {
    const [todos, setITodos] = useState<Todo[]>([])
    useEffect(() =>{
        fetch('https://dummyjson.com/todos')
            .then(value => value.json())
            .then(({todos}) =>{
            setITodos(todos)
        })
    }, [])

    return (
        <div>
            {
                todos.map(item =>{
                    <div>{item.todo}</div>
                })
            }
        </div>
    );
};

export default TodoComponent;
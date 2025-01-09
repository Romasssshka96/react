import React, {useEffect, useState} from 'react';
import {Todo} from "../../models/ITodo.ts";
import {getUserService} from "../../services/api.service.ts";


const TodoComponent = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    useEffect(() =>{
            getUserService()
            .then(({todos}) =>{
                console.log(todos)
            setTodos(todos)
        })
    }, [])

    return (
        <div>
            {
                todos.map(item =>
                    <div className={item.completed? 'bg-lime-600' : 'bg-red-500'} key={item.id}>
                        <div>{item.todo}</div>
                        <div>ID: {item.userId}</div>
                        <hr/>

                    </div>

                )
            }
        </div>
    );
};

export default TodoComponent;
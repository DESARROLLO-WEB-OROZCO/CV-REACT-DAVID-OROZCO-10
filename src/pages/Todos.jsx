import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";

export default function Todos() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        const nuevo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([nuevo, ...todos]);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setTodos(data.slice(0, 10)));
    }, []);

    return (
        <div>
            <h1>Todos</h1>

            <TodoForm addTodo={addTodo} />

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

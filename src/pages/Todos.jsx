import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true); // 👈 ESTADO DE CARGA

  
    const addTodo = (title) => {
        const nuevo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([nuevo, ...todos]);
    };

   
    const toggleTodo = (id) => {
        const updated = todos.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        setTodos(updated);
    };

    
    const deleteTodo = (id) => {
        const filtered = todos.filter(t => t.id !== id);
        setTodos(filtered);
    };

    useEffect(() => {
    const loadTodos = async () => {
        try {
            setLoading(true); 
            
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await res.json();
            
            setTodos(data.slice(0, 10));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    loadTodos();
}, []);


    return (
        <div>
            <h1>Todos</h1>

            <TodoForm addTodo={addTodo} />

            
            {loading && <p>Cargando todos...</p>}

        
            {!loading && (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title} —{" "}
                            {todo.completed ? "✔ Completado" : "✘ Pendiente"}

                            <button onClick={() => toggleTodo(todo.id)}>
                                Cambiar estado
                            </button>

                            <button onClick={() => deleteTodo(todo.id)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}



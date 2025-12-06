import { useState } from "react";

<TodoForm addTodo={addTodo} />

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return alert("No puede estar vacío");
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nuevo todo..."
      />
      <button>Agregar</button>
    </form>
  );
}

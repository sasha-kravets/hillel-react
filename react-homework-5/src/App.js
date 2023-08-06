import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { useState } from "react";
import "./App.css";
import Item from "./components/Item/Item";
import EditForm from "./components/EditForm/EditForm";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleCreateTodo = () => {
    if (title.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        title: title,
        checked: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTitle("");
    }
  };

  const handleDeleteTodo = (id) => {
    const newArr = todos.filter((i) => i.id !== id);
    setTodos(newArr);
  };

  const handleCheckTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const enterEditMode = (todo) => {
    setEditedTodo(todo);
    setIsEditing(true);
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos((todos) =>
      todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
    );
    setIsEditing(false);
  };

  return (
    <div className="App">
      {isEditing && (
        <div>
          <EditForm onUpdate={handleUpdateTodo} editedTodo={editedTodo} />
        </div>
      )}

      <div>
        <Input value={title} onChange={setTitle} />
        <Button text="Create todo" onClick={handleCreateTodo} />
      </div>
      <div>
        {todos.length > 0 &&
          todos.map((i) => (
            <Item
              key={i.id}
              item={i}
              onDelete={handleDeleteTodo}
              onCheck={handleCheckTodo}
              onEdit={enterEditMode}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

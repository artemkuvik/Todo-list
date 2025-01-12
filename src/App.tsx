import { useEffect, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/Todos/TodoForm";
import { TodoList } from "./components/Todos/TodoList";
import { v4 as uuidv4 } from "uuid";
import { AllDeleteButton } from "./components/UI/AllDeleteButton";
import { DeleteButton } from "./components/UI/DeleteButton";

export interface TodoType {
  text: string;
  id: string;
  isActive: boolean;
}

function App() {
  const [list, setList] = useState<TodoType[]>(() => {
    const savedList = localStorage.getItem("todoList");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  function add(text: string): void {
    setList([...list, { id: uuidv4(), text: text, isActive: false }]);
  }

  const completedCount = list.filter((todo) => todo.isActive).length;
  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <TodoForm add={add} />
      <div className="buttons-wrapper">
        <AllDeleteButton setList={setList} />
        <DeleteButton
          setList={setList}
          completedCount={completedCount}
          list={list}
        />
      </div>
      <TodoList list={list} setList={setList} />
      {completedCount === 1 && (
        <div className="completed">You have completed 1 todo!</div>
      )}
      {completedCount > 1 && (
        <div className="completed">
          You have completed {completedCount} todos!
        </div>
      )}
    </div>
  );
}

export default App;

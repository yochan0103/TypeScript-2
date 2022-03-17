import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "../src/Text";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <Text color="red" fontSize="16px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todos) => (
        <Todo
          key={todos.id}
          title={todos.title}
          userId={todos.userId}
          completed={todos.completed}
        />
      ))}
    </div>
  );
}

import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
        console.log(res);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get Data</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId} />
      ))}
    </div>
  );
}

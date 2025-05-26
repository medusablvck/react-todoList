import { useState } from "react";
import './App.css';
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { TaskTodo } from "./components/TaskTodo";

function App() {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState('');

  let copiTasks = tasks;

  const addTask = () => {
    const taskTodo = {
      id: Math.random(),
      value: todo,
      status: false,
    };
    let newTask = [taskTodo, ...tasks]
    setTasks(newTask);
    setTodo('');
  };

  const deleteTask = (id) => {
    let del = tasks.filter(e => e.id !== id)
    setTasks(del);
  };

  const toggleTask = (id) => {
    let toggle = tasks.map(e => e.id === id ? { ...e, status: !e.status } : { ...e })
    setTasks(toggle)
  };

  switch (done) {
    case 'All':
      copiTasks = tasks;
      break;
    case 'Active':
      copiTasks = tasks.filter(e => e.status === false);
      break;
    case 'completes':
      copiTasks = tasks.filter(e => e.status === true);
      break;
    default:
      break;
  }

  const taskTodoList = copiTasks.map(e =>
    <TaskTodo
      key={e.id}
      id={e.id}
      value={e.value}
      status={e.status}
      deleteTask={deleteTask}
      toggleTask={toggleTask} />);

  return (
    <div className='todo-app'>
      <Header />
      <hr className="separator"/>
      <InputTodo addTask={addTask} todo={todo} setTodo={setTodo} />
      {taskTodoList}
      <div className="container-button">
      <button className="all-btm btn" onClick={() => setDone('All')}>Все</button>
      <button className="active-btn btn" onClick={() => setDone('Active')}>Активные</button>
      <button className="completes-btn btn" onClick={() => setDone('completes')}>Выполненные</button>
      </div>
    </div>
  );
}

export default App;

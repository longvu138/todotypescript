import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import InputField from './components/InputField';
import ListTodo from './components/ListTodo';
import { Todo } from './components/todo/Todo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos((todos) => [...todos, {
        id: Date.now(),
        title: todo,
        isComplete: false
      }])
      setTodo("");
    }
  }

  const handleDelete = (id: number) => {
    let currenTodos = todos
    currenTodos = currenTodos.filter((item) => item.id !== id)
    setTodos(currenTodos);
  }

  const handleDone = (id: number) => {
    const todo = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    )
    setTodos(todo)
  }



  return (
    <>
      <Router>
        <div className="App">
          <div className="row">
            <span className='heading'> TodoList</span>
          </div>
          <InputField setTodos={setTodos} todos={todos} todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <Switch>
            <Route path="/" exact>
              <ListTodo
                handleDelete={handleDelete}
                handleDone={handleDone}
                todos={todos}
                setTodos={setTodos} />
            </Route>
            <Route path="/active">
              <ListTodo
                handleDelete={handleDelete}
                handleDone={handleDone}
                todos={todos.filter((item) => !item.isComplete)}
                setTodos={setTodos} />
            </Route>
            <Route path="/completed">
              <ListTodo
                handleDelete={handleDelete}
                handleDone={handleDone}
                todos={todos.filter((item) => item.isComplete)}
                setTodos={setTodos} />
            </Route>
          </Switch>
          <Footer todos={todos} setTodos={setTodos} />
        </div>
      </Router>
    </>


  );
}

export default App;

import React from 'react'
import SingleTodo from './SingleTodo'
import { Todo } from './todo/Todo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    handleDelete: Function
    handleDone: Function
}

const ListTodo: React.FC<Props> = ({ todos, setTodos, handleDelete, handleDone }: Props) => {
    return (
        <div className="todo-list">
            {
                todos.map((todo) => {
                    return (
                        <SingleTodo handleDelete={handleDelete} handleDone={handleDone} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} ></SingleTodo>
                    )
                })
            }
        </div>
    )
}

export default ListTodo
import React, { useState } from 'react'
import { Todo } from './todo/Todo';

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    handleDelete: Function
    handleDone: Function
}


const SingleTodo = ({ todo, todos, setTodos, handleDelete, handleDone }: Props) => {

    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState<string>(todo.title);

    const handleEdit = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
        if (e.code === "Enter") {
            const todo = todos.map((todo) => (todo.id === id ? { ...todo, title: editTodo } : todo))
            setTodos(todo)
            setEdit(!edit)
        }
    }
    const handleDeleteTodo = (id: number) => {
        handleDelete(id)
    }
    const handleDoneTodo = (id: number) => {
        handleDone(id)
    }
    return (
        <div >
            {
                edit ? (
                    <input className='edit'
                        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                            if (event.key === "Escape") {
                                setEdit(!edit);
                            }
                        }}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        onKeyPress={(e) => handleEdit(e, todo.id)}
                    >
                    </input>
                ) : (
                    <div className="view">
                        <input
                            onClick={() => handleDoneTodo(todo.id)}
                            className="toggle"
                            type="checkbox"
                            defaultChecked={todo.isComplete}
                        ></input>
                        {
                            todo.isComplete ? (
                                <label className='completed' >
                                    {todo.title}
                                </label>
                            ) : (
                                <label onDoubleClick={() => setEdit(!edit)} >
                                    {todo.title}
                                </label>
                            )
                        }
                        <div className="destroy" onClick={() => handleDeleteTodo(todo.id)} >
                            x
                        </div>
                    </div>
                )
            }
        </div >

    )
}

export default SingleTodo
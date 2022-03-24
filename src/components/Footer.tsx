import React from 'react'
import { Link } from 'react-router-dom'
// import "./Footer.css"
import { Todo } from './todo/Todo'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const Footer: React.FC<Props> = ({ todos, setTodos }: Props) => {


    const clearCompleted = () => {
        setTodos((todos) => todos.filter((item) => !item.isComplete))
    }


    const filterTodoLeft = (todos: Todo[]): number => {
        let numberFilter = todos.filter((item) => !item.isComplete);
        return numberFilter.length;
    }

    return (
        <>
            {
                todos && todos.length > 0 && (<footer className="footer">
                    <span className="todo-count">
                        <strong> {filterTodoLeft(todos)} </strong>
                        <span>{filterTodoLeft(todos) > 1 ? 'items' : 'item'} </span>
                        <span> left</span>
                    </span>
                    <ul className="filters">
                        <li>
                            <Link to="/">All</Link>
                        </li>
                        <li>
                            <Link to="/active">Active</Link>
                        </li>
                        <li>
                            <Link to="/completed">Completed</Link>
                        </li>
                        <li>
                            <a href='#/clear' onClick={clearCompleted}>
                                Clear completed
                            </a >
                        </li>
                    </ul>
                </footer>
                )

            }

        </>
    )
}

export default Footer
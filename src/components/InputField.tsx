import React from 'react'
// import "./InputField.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Todo } from './todo/Todo'

interface Props {
    todos: Todo[];
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const InputField: React.FC<Props> = ({ todos, todo, setTodo, handleAdd, }: Props) => {

    return (
        <>
            <form onSubmit={(e) => { handleAdd(e) }}>
                {
                    todos.length > 0 ? (
                        <>
                            <label className="toggle-all " >
                                <FontAwesomeIcon icon={faAngleDown} className="icon" />
                            </label>
                            <input
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                                className="input-todo "
                                type="text"
                                placeholder="What needs to be done?"
                            />
                        </>
                    ) : (
                        <input

                            style={{ marginLeft: '0px' }}
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            className="input-todo "
                            type="text"
                            placeholder="What needs to be done?"
                        />
                    )

                }

            </form>
        </>
    )
}

export default InputField
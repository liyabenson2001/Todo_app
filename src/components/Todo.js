import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    const pendingTasks = todos.filter(todo => !todo.isComplete);
    const completedTasks = todos.filter(todo => todo.isComplete);

    return (
        <div>
            <div>
                <h2>Pending Tasks</h2>
                {pendingTasks.map((todo, index) => (
                    <div className="todo-row" key={index}>
                        <div key={todo.id} onClick={() => completeTodo({ id: Date.now, text: todo.id, status: false })}>
                            <input
                                onChange={(e) => {
                                    completeTodo(
                                        todos.map((obj2) => {
                                            if (obj2.id === todo.id) {
                                                obj2.isComplete = e.target.checked;
                                            }
                                            return obj2;
                                        })
                                    );
                                }}
                                value={todo.isComplete}
                                type="checkbox"
                                name=""
                                id=""
                            />
                            {todo.text}
                        </div>
                        <div className="icons">
                            <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
                            <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>Completed Tasks</h2>
                {completedTasks.map((todo, index) => (
                    <div className="todo-row complete" key={index}>
                        <div key={todo.id} onClick={() => completeTodo({ id: Date.now, text: todo.id, status: false })}>
                            <input
                                onChange={(e) => {
                                    completeTodo(
                                        todos.map((obj2) => {
                                            if (obj2.id === todo.id) {
                                                obj2.isComplete = e.target.checked;
                                            }
                                            return obj2;
                                        })
                                    );
                                }}
                                value={todo.isComplete}
                                type="checkbox"
                                name=""
                                id=""
                                checked
                                readOnly
                            />
                            {todo.text}
                        </div>
                        <div className="icons">
                            <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
                            <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Todo

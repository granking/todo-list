import React from 'react'

//styles
import '../Styles/Todos.css'

const Todos = ({ title, id, status, handleCompleted }) => {
    return (
        <div className="todo-card">
            <div>
                <h4>{ title }</h4>
            </div>
            <div className="todo-actions">
                <button className={ status ? "completed" : "reset"}
                onClick={() => handleCompleted(id)}>{status? "completed" : "not completed"}</button>
            </div>
        </div>
    )
}

export default Todos

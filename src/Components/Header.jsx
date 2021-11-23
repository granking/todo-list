import React from 'react'

//Styles
import '../App.css';
import "../Styles/Header.css"

const Header = ({ setHandleTypeTask }) => {
    return (
        <header>
            <nav className="nav container">
                <h1 className="logo">TodoList 😎</h1>
                <ul>
                    <button onClick={() => setHandleTypeTask("all")}>All</button>
                    <button onClick={() => setHandleTypeTask("complete")}>Completed</button>
                    <button onClick={() => setHandleTypeTask("not complete")}>Not Completed</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header

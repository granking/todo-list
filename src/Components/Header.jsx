import React from 'react'

//Styles
import "../Styles/Header.css"

const Header = ({ setHandleTypeTask }) => {
    return (
        <header>
            <nav className="nav-container">
                <h1 className="logo">TodoList 😎</h1>
                <ul className="botones">
                    <button className="button1" onClick={() => setHandleTypeTask('all')}>All</button>
                    <button className="button1" onClick={() => setHandleTypeTask('complete')}>Completed</button>
                    <button className="button1" onClick={() => setHandleTypeTask('notcomplete')}>Not Completed</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark app-nav-bar">
                <Link className="nav-link" to="/home">Task Manager</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tasks">Create Task</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;
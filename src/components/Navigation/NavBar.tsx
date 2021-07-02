import React from 'react'

export const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/welcome">Welcome</a>
                </li>
                <li>
                    <a href="/subscribe">Subscribe</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/logout">Logout</a>
                </li>
            </ul>
        </div>
    )
}

import React from 'react'
import { machineEngine } from '../../machine'
import Switch from 'react-switch'
import { useMachine } from '@xstate/react'

export const NavBar = () => {
    const [state, send] = useMachine(machineEngine)

    return (
        <div className="navbar">
            <ul>
                <li>
                    <a href="/">{state.matches('active') && 'active'}</a>
                </li>
                <li>
                    <a href="/welcome">{state.matches('inactive') && 'Welcome'}</a>
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
            <Switch
                onChange={() => send({ type: 'TOGGLE' })}
                checked={state.matches('active')}
                aria-label="Toggle me"
            />
        </div>
    )
}

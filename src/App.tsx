import React, { Suspense } from 'react'
import { AppRoutes } from './router'
import { AuthProvider } from './useAuth'
import './assets/sass/main.scss'
import { load } from "./store";

load("welcome")
interface State {
    id?: number
    email?: string
    phone?: string
    password?: string
    verify?: boolean
    token?: string
    message?: string
    settings?: {}
    projects?: []
}

const defaultState: State = {
    email: 'guest@voterookie.com',
}
function App() {
    return (
        <div className="App">
            <Suspense fallback={<span>waiting...</span>}>
                <AuthProvider initialState={defaultState}>
                    <AppRoutes />
                </AuthProvider>
            </Suspense>
        </div>
    )
}

export default App

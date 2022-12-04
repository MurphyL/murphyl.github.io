import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './core/app.v1'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

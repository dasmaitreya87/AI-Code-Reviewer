import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css' // 👈 import your plain CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



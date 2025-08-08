import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import fonts so Vite can process them
import './assets/1FTV-VIP-High-Spirited.otf'
import './assets/Simplesnails.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

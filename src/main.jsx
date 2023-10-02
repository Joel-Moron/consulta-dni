import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles.css'
import { ConsultationApp } from './ConsultationApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConsultationApp />
  </React.StrictMode>,
)

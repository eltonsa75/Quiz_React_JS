import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { QuizProvider } from './context/quiz.jsx'


import './index.css'


createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <QuizProvider>
    <App />
  </QuizProvider>
 </React.StrictMode>
)

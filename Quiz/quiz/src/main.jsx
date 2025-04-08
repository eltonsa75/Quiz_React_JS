import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QuizProvider } from './context/quiz.jsx'

createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <QuizProvider>
    <App />
  </QuizProvider>
 </React.StrictMode>
)

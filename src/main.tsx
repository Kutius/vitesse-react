import React from 'react'
import ReactDOM from 'react-dom/client'
import '~/modules/i18n.ts'
import 'virtual:uno.css'

import App from './App.tsx'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

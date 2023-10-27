// src/index.js
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import RefreshRuntime from 'react-refresh/runtime'

RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

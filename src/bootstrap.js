// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import RefreshRuntime from 'react-refresh/runtime'

RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

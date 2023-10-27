import React, { Suspense } from 'react'
const Login = React.lazy(() => import('auth/App'))
const Button = React.lazy(() => import('lib/Button'))

const App = () => {
  return (
    <div
      style={{
        border: '1px solid cornflowerblue',
        padding: '1rem',
        margin: '1rem',
      }}>
      <small style={{ textAlign: 'center', display: 'block', color: 'cornflowerblue' }}>This is loaded from App Container</small>
      <div
        style={{
          margin: '1rem',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: 'cornflowerblue',
          color: 'white',
        }}>
        <h1>App Container</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <Login />
        <Button />
      </Suspense>
    </div>
  )
}

export default App

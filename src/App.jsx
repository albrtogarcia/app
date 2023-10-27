import React, { Suspense } from 'react'
import './App.scss'
const Button = React.lazy(() => import('lib/Button'))
const Alert = React.lazy(() => import('lib/Alert'))
const Badge = React.lazy(() => import('lib/Badge'))

const App = () => {
  return (
    <>
      <div
        style={{
          margin: '1rem',
          padding: '1rem',
          textAlign: 'center',
          backgroundColor: 'tomato',
          color: 'white',
        }}>
        <h1>App Container</h1>
        <small>
          This is loaded from <code>/apps/app/src/App.jsx</code>
        </small>
      </div>
      <Suspense fallback={'loading...'}>
        <div
          style={{
            margin: '3rem 1rem',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column',
            gap: '2rem',
            border: '1px dashed teal',
          }}>
          <small>
            This is loaded from <code>/packages/lib/src/components</code>
          </small>
          <Alert type="warning" title="¡Hola qué tal!" text="¿Vamos a por un helado?" />
          <Badge type="success" text="Validado" />
          <Button>Click me</Button>
        </div>
      </Suspense>
    </>
  )
}

export default App

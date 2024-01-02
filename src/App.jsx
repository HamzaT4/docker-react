import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

    
          <img src={reactLogo} className="logo react" alt="React logo" />
        
      </div>
      <h1>React in Docker</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Welcome
        </p>
      </div>
      <p className="read-the-docs">
        best site ever
      </p>
    </>
  )
}

export default App

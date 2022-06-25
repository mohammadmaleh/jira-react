import React from 'react'
import './App.css'
import logo from './logo.svg'

interface AppProperties {
  test(): void
}

function App({ test }: AppProperties) {
  console.log({ test })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

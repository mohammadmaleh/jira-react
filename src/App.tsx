import React from 'react'
import './App.scss'
import HelloWorld from './components/HelloWorld'

interface AppProperties {
  test(): void
}

function App({ test }: AppProperties) {
  console.log({ test })
  return (
    <div className="App">
      <HelloWorld></HelloWorld>;
    </div>
  )
}

export default App

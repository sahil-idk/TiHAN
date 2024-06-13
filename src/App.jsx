import { useState } from 'react'
import { Dashboard } from './components/component/dashboard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='text-3xl font-bold text-left'>TiHAN Traffic Flow</h1> */}
      <Dashboard/>
    </>
  )
}

export default App

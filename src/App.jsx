import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Driwer from './components/drawer/drawer'
import Collapse from './components/collapse/collapse'
import Gamefirst from './components/game_first/gamefirst'
import Bmi from './components/bmi/bmi'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Driwer/>
     <Collapse/>
     <Gamefirst/>
     <Bmi/>
    </>
  )
}

export default App

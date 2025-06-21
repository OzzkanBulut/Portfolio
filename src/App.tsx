import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';

import MatrixPortfolio from './portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MatrixPortfolio></MatrixPortfolio>
    </>
  )
}

export default App

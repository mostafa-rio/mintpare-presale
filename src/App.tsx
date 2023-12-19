import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <Banner />
    </div>
  )
}

export default App

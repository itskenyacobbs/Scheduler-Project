import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Create from './components/CreateCourse'
import Courses from './components/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Create />
      <Courses />
    </>
  )
}

export default App

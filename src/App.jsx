import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Create from './components/CreateCourse'
import Courses from './components/Courses'

function App() {
  const [classes, setClasses] = useState([])
   
   function addClass(newClass) {
    //this spread operator is here in order to describe the properites in the object we created in create component
    setClasses([...classes, newClass])
   }

  return (
    <>
      <Header />
      <Create  addClass={addClass} />
      <Courses classes = {classes} />
    </>
  )
}

export default App

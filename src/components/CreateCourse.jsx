import { useState } from 'react'

//so here I received the props as a parameter to my function.
function Create (props) {
   const [name, setName] = useState("")
   const [day, setDay] = useState("")
   const [start, setStart] = useState("")
   const [end, setEnd] = useState("")
   
   //ok so I was super stuck and this i did get from claude
   function handleSubmit() {
    //This creates the object of the class schedule, spread operator online 
    const newClass = {
        name: name,
        day: day, 
        start: start,
        end: end,
    }
    //this invokes the function
    props.addClass(newClass)
   }
    return (
        <div className="input-container">
            <div className="container-title">Add a course</div>
            <p className ="input-title">Course name</p>
            <input onChange={(e) => setName(e.target.value)} className="input">
            </input>
            <p className="input-title">Day</p>
            <input onChange={(e) => setDay(e.target.value)} className="input">
            </input>
            <p className="input-title">Start</p>
            <input onChange={(e) => setStart(e.target.value)}className="input">
            </input>
            <p className="input-title">End</p>
            <input onChange={(e) => setEnd(e.target.value)}className="input">
            </input>
            <div className="button-container">
            <button onClick={() => handleSubmit()} className="add-class">
                Add Class
            </button>
            </div>
        </div>
    )
}

export default Create
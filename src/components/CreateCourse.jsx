import { useState } from 'react'

//so here I received the props as a parameter to my function.
function Create (props) {
   const [name, setName] = useState("")
   const [day, setDay] = useState("")
   const [start, setStart] = useState("")
   const [end, setEnd] = useState("")
   
   //ok so I was super stuck and this i did get from claude
   function handleSubmit() {
    //object created here, spread operator online 23
    const newClass = {
        name: name,
        day: day, 
        start: start,
        end: end,
    }
    //and here I called my handle submit
    props.addClass(newClass)
   }


    return (
        <div className="input-container">
            <p>Course name</p>
            <input onChange={(e) => setName(e.target.value)} className="input">
            </input>
            <p>Day</p>
            <input onChange={(e) => setDay(e.target.value)} className="input">
            </input>
            <p>Start</p>
            <input onChange={(e) => setStart(e.target.value)}className="input">
            </input>
            <p>End</p>
            <input onChange={(e) => setEnd(e.target.value)}className="input">
            </input>
            <button onClick={() => handleSubmit()} className="add-class">
                Add Class
            </button>
        </div>
    )
}

export default Create
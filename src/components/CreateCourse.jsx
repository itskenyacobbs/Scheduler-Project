import { useState } from 'react'

//so here I received the props as a parameter to my function.
function Create (props) {
   const [name, setName] = useState("")
   const [day, setDay] = useState("")
   const [start, setStart] = useState("")
   const [end, setEnd] = useState("")
   
   //ok so I was super stuck and this i did get from claude
   function handleSubmit(e) {
    //This prevents me from having the form tag from working so my function can handle the submission of classes and time
    e.preventDefault()
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
            {/* because I added the form I had to insert the e.preventDefault() to my function */}
            <form className="form">
                <label placeholder="e.g.Intro to" className ="input-title">Course name</label>
                <br></br>
            <input onChange={(e) => setName(e.target.value)} className="input">
            </input>
            <label  className="input-title">Day</label>
            <select onChange={(e) => setDay(e.target.value)} className="input">
                <option></option>
                <option> Monday </option>
                <option> Tuesday </option>
                <option> Wednesday </option>
                <option> Thursday </option>
                <option> Friday </option>
                <option> Saturday</option>
                <option> Sunday </option>
            </select>
            <label className="input-title">Start</label>
            <input onChange={(e) => setStart(e.target.value)}className="input">
            </input>
            <label className="input-title">End</label>
            <input onChange={(e) => setEnd(e.target.value)}className="input">
            </input>
            <div className="button-container">
            {/*Here i had to pass the event hanto access the prevent default method I referenced in my handle submit function */}
            <button onClick={(e) => handleSubmit(e)} className="add-class">
                Add Class
            </button>
            </div>
            </form>
        </div>
    )
}

export default Create
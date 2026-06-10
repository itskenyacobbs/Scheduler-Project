import { useState } from 'react'

function Create () {
   const [name, setName] = useState("")
   const [day, setDay] = useState("")
   const [start, setStart] = useState("")
   const [end, setEnd] = useState("")
   

    return (
        <div className="input-container">
           
            <p>Course name</p>
            <input onChange={(e) => setName(e.target.value)} className="input">
            </input>
            <p>Day</p>
            <input className="input">
            </input>
            <p>Start</p>
            <input className="input">
            </input>
            <p>End</p>
            <input className="input">
            </input>
            <button onClick={() => console.log('clicked')} className="add-class">
                Add Class
            </button>
        </div>
    )
}

export default Create
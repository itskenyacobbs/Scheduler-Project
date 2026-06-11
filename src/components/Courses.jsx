function Courses(props){

    

    return (
        <div className = "course-container">
            {/* this map() method is taking every object the user creates and turning each one into a div. */}
            {props.classes.map((course) => (
                <div className="courses">
                    <p className="course-title">{course.name}</p>
                    <p className="course-date">{course.day} - {course.start} - {course.end}</p>
                    {/* <p className="course-time">{course.start} - {course.end}</p> */}
                    
                </div>

            ))}
            {/* <div className = "courses">
                <p className = "course-title">
                    <p className="course-description">
                        Test
                    </p>
                </p>
            </div>
              <div className = "courses">
                 <p className = "course-title"></p>
            </div>
              <div className = "courses">
                 <p className = "course-title"></p>
            </div>
              <div className = "courses">
                 <p className = "course-title"></p>
            </div> */}
        </div>
    )
}

export default Courses
function Courses(props){
    return (
        <div className = "course-container">
            {/* this map() method is taking every object the user creates and turning each one into a div. */}
            {props.classes.map((course) => (
                <div className="courses">
                    <p className="course-title">{course.name}
                        <p className="course-date">{course.day} - {course.start} - {course.end}</p>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Courses
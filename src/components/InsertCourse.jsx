import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const InsertCourse = () => {

    const [input, changeInput] = useState({
    course_name: "",
    duration: "",
    fee: "",
    mode: "",
    trainer: ""
})


     const inputHandler = (event)=>{
      changeInput({...input,[event.target.name]:event.target.value})
     }

     const readValue = () => {
    console.log(input);

    axios.post("https://host-demo-app.onrender.com/api/add-course", input)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
        });
}
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <h1><b>INSERT COURSE</b></h1>
                    <br></br>
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label  className="form-label">course name</label>
                                <input type="text" 
                                className="form-control"
                                name="course_name" 
                                value={input.course_name}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label  className="form-label">duration</label>
                                <input type="text" 
                                className="form-control" 
                                 name="duration" 
                                value={input.duration}
                                onChange={inputHandler}/>
                            </div>
                             <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">fee</label>
                                <input type="text" 
                                className="form-control"
                               name="fee" 
                                value={input.fee}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">mode</label>
                                <input type="text"
                                 className="form-control"
                            name="mode" 
                                value={input.mode}
                                onChange={inputHandler}/>
                            </div>
                           
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                                <label className="form-label">trainer</label>
                               <input type="text"
                                 className="form-control"
                            name="trainer" 
                                value={input.trainer}
                                onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InsertCourse
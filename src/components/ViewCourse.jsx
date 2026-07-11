
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const ViewCourse = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/courses").then(
            (response) => {
                changeData(response.data)

            }
        ).catch()

    }
      useEffect(
        () => {
            fetchData()
        },[]
    )

    return (
        <div>
           

            <div className="container mt-4">
                <h1><b><i>VIEW COURSES</i></b></h1>
                <br />
                <div className="row g-4">
                    {data.map(
                        (value, index) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className="card h-100 shadow-sm">
                                        
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{value.brand}</h5>
                                            <p><b>course_name:</b>{value.course_name}</p>
                                            <p><b>created_at:</b> {value.created_at}</p>
                                            <p><b>duration:</b> {value.duration}</p>
                                            <p><b>fee:</b> {value.fee}</p>
                                            <p><b>id:</b>{value.id}</p>
                                            <p><b>mode:</b> {value.mode}</p>
                                            <p><b>trainer:</b> {value.trainer}</p>
                                          

                                            <button className="btn btn-primary w-100">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )

                        }
                    )}

                </div>
            </div>
        </div>
    )
}
export default ViewCourse;
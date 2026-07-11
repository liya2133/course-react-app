
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'



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
           <Nav />
      <div className="container mt-4">
        <h2 className="text-center mb-4">
          <b><i>VIEW ALL EMPLOYEES</i></b>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">course_name</th>
              <th scope="col">created_at</th>
              <th scope="col">duration</th>
              <th scope="col">fee</th>
              <th scope="col">id</th>
              <th scope="col">mode</th>
              <th scope="col">trainer</th>
            </tr>
          </thead>
          
                <tbody>
                  {data.map
          (
            (value,index)=>{
              return(
            <tr>
              <td>{value.course_name}</td>
              <td>{value.created_at}</td>
              <td>{value.duration}</td>
              <td>{value.fee}</td>
               <td>{value.id}</td>
              <td>{value.mode}</td>
              <td>{value.trainer}</td>
            </tr>

             )
            }
          )}
          </tbody>
             
          
        </table>
      </div>
    </div>
  )
}
export default ViewCourse;
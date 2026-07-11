import React from 'react'

const InsertCourse = () => {
  return (
    <div>

        <div className="container">
            <div className="row">
                <h1><b>INSERT COURSE</b></h1>
                <br></br>
                <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">course_name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">duration</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">mode</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">fee</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">trainer</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default InsertCourse
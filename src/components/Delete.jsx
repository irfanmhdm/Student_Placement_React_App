import React from 'react'
// import Navbar from './Navbar'


const Delete = () => {
  return (
    <div>
                  {/* <Navbar/> */}

        <div className="container">
            <div className="row mt-5">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">

                    <div className="row ">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">

                            <label htmlFor="" className="form-label"> Admission Number</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 g-3">

                             <button className="btn btn-danger">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>



  )
}

export default Delete
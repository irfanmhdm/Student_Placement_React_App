import React from 'react'

const Addstudent = () => {
  return (
    <div>
      <div className="container border border-2 rounded shadow p-5 mt-5">
        <div className="row">
          <div className="col-12">
            <div className="row g-3">

              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <label className="form-label">Registration Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Aadhar Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Branch / Department</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">SSLC Mark (%)</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Plus Two Mark (%)</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">UG Degree Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">UG Mark (%)</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">PG Degree Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Optional"
                />
              </div>

              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">PG Mark (%)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Optional"
                />
              </div>

              <div className="col-12 text-center mt-3">
                <button className="btn btn-success px-5">
                  Submit
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addstudent
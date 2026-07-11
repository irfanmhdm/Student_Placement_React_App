import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios
            .get(
                "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json"
            )
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Student Placement Details</h2>

            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>Registration Number</th>
                            <th>Full Name</th>
                            <th>Branch</th>
                            <th>SSLC Mark</th>
                            <th>Plus Two Mark</th>
                            <th>UG Mark</th>
                            <th>PG Mark</th>
                        </tr>
                    </thead>


                    <tbody>
                        {data.map((value, index) => (
                            <tr key={index}>
                                <td>{value.regNo}</td>
                                <td>{value.fullName}</td>
                                <td>{value.branch}</td>
                                <td>{value.sslcMark}</td>
                                <td>{value.plusTwoMark}</td>
                                <td>{value.ugMark}</td>
                                <td>{value.pgMark}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default View;
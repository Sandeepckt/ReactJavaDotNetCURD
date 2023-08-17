import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
function ListEmp(props) {
    const [employees, setEmployee] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    const handledelete = (id) => {
        const confirmed = window.confirm('Are you sure you want to proceed?');
        if (confirmed) {
          fetch(`http://localhost:5237/api/Employee/${id}`, {
            method: 'DELETE'
          })
            .then(res => {
              if (res.ok) {
                // Employee deleted successfully
                // Update the employees list by filtering out the deleted employee
                setEmployee(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
                navigate(0);
              } else {
                // Handle error case
                console.log('Failed to delete employee');
              }
            })
            .catch(error => {
              // Handle fetch error
              console.log('Error occurred while deleting employee', error);
            });
        } else {
          console.log('Cancelled');
        }
      };
      
    useEffect(() => {
        fetch("http://localhost:5237/api/Employee")
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        <div>
            <h2>Employees Data...</h2>
            <h5><a href='empcreate'> Create an New Employee</a></h5>
            <Table striped bordered hover> <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                </tr>
            </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td> <a href={'/emp/' + emp.id}>display</a></td>
                            <td> <a href={'/empedit/' + emp.id}>Edit</a></td>
                            {/* <td> <a href={'/empdel/' + emp.id}>delete</a></td> */}
                            <button onClick={() => handledelete(emp.id)}>delete</button>

                        </tr>
                    ))}
                </tbody></Table></div>
    );
}
export default ListEmp; 
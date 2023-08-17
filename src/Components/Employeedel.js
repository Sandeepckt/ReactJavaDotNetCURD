import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

 function Employeedel(props) {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5237/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    

    const handledelete = (event) => {
        // alert(id);
        const confirmed = window.confirm('Are you sure you want to proceed?');
    if (confirmed) {
        fetch("http://localhost:5237/api/Employee/" + id, {
            method: 'Delete'
        })
            .then(res => console.log(res))
            navigate('/ListEmp');
    }
    else
{
    console.log('Cancelled');
}
}

    return (
        <div>
            <h1>Are you sure--</h1>
            <label>Id:</label>
            {employee.id}<br />
            <label>name:</label>
            {employee.name}<br />
            <label>Email:</label>
            {employee.email}<br />
            <label>Department:</label>
            {employee.department}<br />
            
            <form>
                <button onClick={handledelete}>Delete</button>
            </form>
        </div>
    );
}
export default Employeedel;
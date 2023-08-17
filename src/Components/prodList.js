import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
function ProdList(props) {
    const [products, setProduct] = useState([]);
    const { proid } = useParams();
    let navigate = useNavigate();
    const handledelete = (id) => {
        const confirmed = window.confirm('Are you sure you want to proceed?');
        if (confirmed) {
          fetch(`http://localhost:8080/api/products/${id}`, {
            method: 'DELETE'
          })
            .then(res => {
              if (res.ok) {
                // Employee deleted successfully
                // Update the employees list by filtering out the deleted employee
                setProduct(prevProducts => prevProducts.filter(emp => emp.id !== id));
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
        fetch("http://localhost:8080/api/products")
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, []);
    return (
        <div>
            <h2>All Product List</h2>
            <h5><a href='empcreate'> Create an New Product</a></h5>
            <Table striped bordered hover> <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>quantity</th>
                    <th>price</th>
                </tr>
            </thead>
                <tbody>
                    {products.map(prod => (
                        <tr key={prod.proid}>
                            <td>{prod.proid}</td>
                            <td>{prod.proname}</td>
                            <td>{prod.category}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.price}</td>
                            <td> <a href={'/proddisp/' + prod.proid}>display</a></td>
                            <td> <a href={'/productedit/' + prod.id}>Edit</a></td>
                            {/* <td> <a href={'/empdel/' + emp.id}>delete</a></td> */}
                            <button onClick={() => handledelete(prod.proid)}>Delete</button>

                        </tr>
                    ))}
                </tbody></Table></div>
    );
}
export default ProdList; 
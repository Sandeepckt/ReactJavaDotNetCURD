import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function ProductEdit(props) {
    const [products, setProduct] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("" + id)
            .then(res => res.json())
            .then((result) => {
                setProduct(result);
            }
            );
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(products);
        console.log(JSON.parse(demo));
        fetch("" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate(0);

        // alert(employee);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>code:</label>
            <input
                type="text"
                name="proid"
                value={products.proid || ""}
                onChange={handleChange}
            />
            <br />            <label>Product Name:</label>
            <input
                type="text"
                name="proname"
                value={products.proname || ""}
                onChange={handleChange}
            />
            <br />
                  <label>Category :</label>
            <input
                type="text"
                name="category"
                value={products.category || ""}
                onChange={handleChange}
            />
            <br />            <label>Quantity :</label>
            <input
                type="text"
                name="quantity"
                value={products.quantity || ""}
                onChange={handleChange}
            />
            <br />            <label>Price :</label>
            <input
                type="text"
                name="price"
                value={products.price || ""}
                onChange={handleChange}
            />
            <br />
            <input type="submit" />
        </form>
    );
}
export default ProductEdit;

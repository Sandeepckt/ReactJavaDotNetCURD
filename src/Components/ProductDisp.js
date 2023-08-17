import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProductDisp() {
    const [products, setProduct] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:8080/api/productsById/" + id)
            .then(res => res.json())
            .then((result) => { setProduct(result); console.warn(result) }
            );
    }, {});
    return (
        <div className='App col-3 m-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/logo192.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {products.proid}
                    </Card.Text>
                    <Card.Text>
                        {products.proname}
                    </Card.Text>
                    <Card.Text>
                        {products.category}
                    </Card.Text>
                    <Card.Text>
                        {products.quantity}
                    </Card.Text>
                    <Card.Text>
                        {products.price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductDisp;
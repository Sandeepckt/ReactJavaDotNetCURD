import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/Home">CRUD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Contact">Contactus</Nav.Link>
                        <Nav.Link href="/ListEmp">ListEmp -DotNET</Nav.Link>
                        <Nav.Link href="/ProdList">ListProd -Java</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}
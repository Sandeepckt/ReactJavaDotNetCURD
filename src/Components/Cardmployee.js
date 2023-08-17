import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
function Cardmployee({myEmp}) {
  // console.log(myEmp);
  return (
    <div className='App col-3 m-auto'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/logo192.png"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         {myEmp.id}
         </Card.Text>
         <Card.Text>
         {myEmp.name}
         </Card.Text>
         <Card.Text>
         {myEmp.email}
         </Card.Text>
         <Card.Text>
         {myEmp.department}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardmployee;
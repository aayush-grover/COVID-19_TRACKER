import React ,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navbar1 extends Component {
  render(){
  return (
    <React.Fragment>
   <Navbar bg="light" expand="lg">
   <Navbar.Brand href="#home">
   <img
        src={process.env.PUBLIC_URL + "/images/svgs/coronavirus.svg"}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
     {'  '}
     <span className="fonts">COVID-19</span> 
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#link">link</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  </React.Fragment>
  );
}
}

export default Navbar1;

import {Container, Navbar, Nav} from  'react-bootstrap'

const NavigationBar = () => {
    return (
        <div>
           <Navbar bg='dark' variant='dark'>
               <Container>
               <Navbar.Brand>Food Order</Navbar.Brand>
                   <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/catalogue'>Catalog</Nav.Link>
                   </Nav>
               </Container>
           </Navbar>
        </div>
    )
}

export default NavigationBar
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
   return (
      <header>
         <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
               <Navbar.Brand href='/'>F1 Detailer</Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                     <Nav.Link href='/'>Home</Nav.Link>
                     <Nav.Link href='#link'>Link</Nav.Link>
                     <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                        <NavDropdown.Item href='#action/3.1'>
                           Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>
                           Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.3'>
                           Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='#action/3.4'>
                           Separated link
                        </NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;

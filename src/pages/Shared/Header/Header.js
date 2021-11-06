import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import logo from '../../../images/logo.png';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import HTMLHelmet from '../../HTMLHelmet/HTMLHelmet';

const Header = () => {
    const { user, handleLogOut } = useAuth()
    const [headerBgColor, setHeaderBgColor] = useState(false)
    const location = useLocation()


    let bgColorOtherPage = false;
    if (location.pathname !== "/" && location.hash !== "#home" && location.pathname !== "/home") {
        bgColorOtherPage = true;
    }

    const handleHeaderBGColor = () => {
        window.scrollY >= 500 ? setHeaderBgColor(true)
            : setHeaderBgColor(false)
    }
    window.addEventListener('scroll', handleHeaderBGColor)

    return (
        <div style={!headerBgColor && !bgColorOtherPage ? { position: 'fixed', zIndex: '999', width: '100%', } : { position: 'fixed', zIndex: '999', width: '100%', backgroundColor: '#284b63', transition: '0.5s' }} data-aos="fade-down">
            <HTMLHelmet />
            <Navbar className="py-3" expand="lg"
                style={{ background: 'none', }}>
                <Container>
                    <Navbar.Brand href="#" className="d-flex align-items-center">
                        <img className="" src={logo} alt="" style={{ width: '100px' }} />
                        <h3 className="text-white m-0 fw-bold">QSW</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'white' }} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 ms-5"
                            style={{ maxHeight: '100px', }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home#home"
                                className="text-white fs-5 text-decoration-none me-4">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#CarParts"
                                className="text-white fs-5 text-decoration-none me-4">Car Parts</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#OurExperts"
                                className="text-white fs-5 text-decoration-none me-4">Our Experts</Nav.Link>
                            <Nav.Link as={HashLink} to="/about"
                                className="text-white fs-5 text-decoration-none me-4">About</Nav.Link>
                        </Nav>
                        {user &&
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 py-2"
                                    aria-label="Search"
                                />
                                <Button variant="outlined-warning" style={{ backgroundColor: '#f46518', color: 'white', }}>Search</Button>
                            </Form>}
                        <div className="d-flex ms-4">
                            {user &&
                                (user.email || user.displayName)
                                ? <NavDropdown
                                    title={
                                        user.photoURL
                                            ? <img className="rounded-circle" src={user.photoURL} alt=""
                                                style={{ width: '50px', height: '50px', }} />
                                            : <div div className="ms-3 user-select-none text-white p-2 d-inline-block rounded-circle" style={{ width: '50px', height: '50px', backgroundColor: '#ef461a' }}>
                                                <h3>{user.displayName.slice(0, 1)}</h3>
                                            </div>

                                    } >
                                    <NavDropdown.Item href="">{user.displayName}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogOut} href="">
                                        Log Out</NavDropdown.Item>
                                </NavDropdown>

                                : <>
                                    <Nav.Link as={Link} className="text-white fs-5 text-decoration-none "
                                        to="/login">Log In</Nav.Link>
                                    <Nav.Link as={Link} className="text-white fs-5 text-decoration-none "
                                        to="/registration">Registration</Nav.Link>
                                </>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;
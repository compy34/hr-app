import React, {useState, useEffect} from 'react';
import {Navbar, Nav, Container, Button, Badge} from 'react-bootstrap';
import {Link, useLocation, useNavigate} from "react-router-dom";
import Parse from "../services/parse";

export default function MyNavBar() {
    const location = useLocation();
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = Parse.User.current();
        setCurrentUser(user);
    }, []);

    async function handleLogout() {
        try {
            await Parse.User.logout();
            setCurrentUser(null);
            navigate("/login");
        } catch(err) {
            console.error(err);
            alert('Error logging out');
        }
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to='/' className='fw-bold fs-4' style={{ color: 'gray', fontFamily: 'Trebuchet MS' }}>
                    hr-app
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Left-aligned navigation links */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' active={location.pathname === '/'}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/employees' active={location.pathname === '/employees'}>
                            Employees
                        </Nav.Link>
                        <Nav.Link as={Link} to='/departments' active={location.pathname === '/departments'}>
                            Departments
                        </Nav.Link>
                        <Nav.Link as={Link} to='/reports' active={location.pathname === '/reports'}>
                            Reports
                        </Nav.Link>
                    </Nav>

                    {/* Right-aligned auth links / user info */}
                    <Nav className="ms-auto d-flex align-items-center gap-3">
                        {currentUser ? (
                            <div className='text-light d-flex align-items-center gap-3'>
                                <span>
                                    {currentUser.get('username') || currentUser.get('email')}
                                    <Badge bg='secondary' className='ms-2'>
                                        HR
                                    </Badge>
                                </span>
                                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Nav.Link as={Link} to='/login' active={location.pathname === '/login'}>
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to='/register' active={location.pathname === '/register'}>
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
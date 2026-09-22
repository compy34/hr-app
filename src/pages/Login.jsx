import React, { useState } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Parse from "../services/parse.js"

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault()
        try {
            await Parse.User.logIn(username, password);
            navigate("/");
        }
        catch(err) {
            console.error(err);
            alert("Invalid username or password");
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Card style={{ width: '400px' }}>
                <Card.Body>
                    <h2 className='text-center mb-4'>Login to system</h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={event => setUsername(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
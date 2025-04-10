import React from 'react';
import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/zitharalogo.png"
              width="150"
              className="d-inline-block align-top"
              alt="Zithara.AI logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5 pt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="display-4 fw-bold"
            >
              Zithara.AI: Smart Engagement for Modern Retail
            </motion.h1>
            <p className="lead mt-3">
              Capture, Activate, Re-engage, and Monetize all your customers with our AI-Powered Customer Data Platform.
            </p>
            <div className="mt-4">
              <Button as={Link} to="/dashboard" variant="primary" className="me-2">
                Go to Dashboard
              </Button>
              <Button as={Link} to="/register" variant="outline-primary">
                Get Started
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <motion.img
              src="/homepic.png"
              alt="Hero visual"
              className="img-fluid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;



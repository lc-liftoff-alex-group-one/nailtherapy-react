import React, { useState, useEffect } from 'react';
import { Button, Container, Card, Col, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ServicesList() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getServices = () => {
        fetch('http://localhost:8080/api/v1/services')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
            .catch(error => console.error(error));
    }
    const removeService = (id) => {
        fetch('http://localhost:8080/api/v1/services/' + id, {'method': 'DELETE'})
            .then(response => {
                if (!response.ok) {
                    console.error('Service delete: network error');
                } else {
                    getServices();
                }
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        getServices()
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const servicesList = services.map(service => (
        <tr key={service.id}>
            <td style={{ whiteSpace: 'nowrap' }}>{service.name}</td>
            <td>{service.description}</td>
            <td>{service.price}</td>
            <td>
                <Button className='btn btn-danger' onClick={ () => removeService(service.id)}>
                    Delete
                </Button>
            </td>
        </tr>
    ));

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Services</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>{servicesList}</tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

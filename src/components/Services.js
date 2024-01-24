import React, { useState, useEffect } from 'react';
import { Container, Table } from 'reactstrap';

export default function ServicesList() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/services')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const servicesList = services.map(service => (
        <tr key={service.id}>
            <td style={{ whiteSpace: 'nowrap' }}>{service.name}</td>
            <td>{service.description}</td>
            <td>{service.price}</td>
        </tr>
    ));

    return (
        <div>
            <Container fluid>
                <h3>Services</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="30%">Service</th>
                        <th width="30%">Description</th>
                        <th width="40%">Price</th>
                    </tr>
                    </thead>
                    <tbody>{servicesList}</tbody>
                </Table>
            </Container>
        </div>
    );
};

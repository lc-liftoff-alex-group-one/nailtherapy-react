import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';

class ServicesList extends Component {

    constructor(props) {
        super(props);
        this.state = {services: []};
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/services')
            .then(response => response.json())
            .then(data => this.setState({services: data}));
    }
    render() {
        const {services, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const servicesList = services.map(service => {
            return <tr key={service.id}>
                <td style={{whiteSpace: 'nowrap'}}>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
            </tr>
        });

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
                        <tbody>
                        {servicesList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ServicesList;
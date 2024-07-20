import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ServiceList() {
    const services = [
        {
            title: 'Laundry Service',
            description: 'Complete laundry service with wash, dry, and fold.',
            image: 'https://via.placeholder.com/300x200?text=Laundry+Service'
        },
        {
            title: 'Dry Cleaning',
            description: 'Professional dry cleaning for all types of fabrics.',
            image: 'https://via.placeholder.com/300x200?text=Dry+Cleaning'
        },
        {
            title: 'Ironing Service',
            description: 'Expert ironing to keep your clothes crisp and wrinkle-free.',
            image: 'https://via.placeholder.com/300x200?text=Ironing+Service'
        }
    ];

    const offers = [
        {
            title: '20% Off on First Order',
            description: 'Use code FIRST20 to get 20% off on your first laundry order!',
            image: 'https://via.placeholder.com/300x200?text=20%25+Off'
        },
        {
            title: 'Free Pickup and Delivery',
            description: 'Enjoy free pickup and delivery for orders above $50.',
            image: 'https://via.placeholder.com/300x200?text=Free+Pickup+and+Delivery'
        },
        {
            title: '50% Off on Dry Cleaning',
            description: 'Get 50% off on all dry cleaning services. Limited time offer!',
            image: 'https://via.placeholder.com/300x200?text=50%25+Off+Dry+Cleaning'
        }
    ];

    return (
        <Container>
            <h2 className="text-center my-5">Our Services</h2>
            <Row>
                {services.map((service, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="service-card">
                            <Card.Img variant="top" src={service.image} />
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>
                                    {service.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <h2 className="text-center my-5">Daily Offers</h2>
            <Row>
                {offers.map((offer, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="offer-card">
                            <Card.Img variant="top" src={offer.image} />
                            <Card.Body>
                                <Card.Title>{offer.title}</Card.Title>
                                <Card.Text>
                                    {offer.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ServiceList;

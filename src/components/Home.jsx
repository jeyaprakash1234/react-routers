import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

function Home() {
    const reviews = [
        {
            name: 'John Doe',
            text: 'Excellent service! My clothes were perfectly cleaned and delivered on time.',
            image: 'https://via.placeholder.com/150?text=John+Doe',
            rating: 5
        },
        {
            name: 'Jane Smith',
            text: 'Very professional and affordable. I highly recommend their services.',
            image: 'https://via.placeholder.com/150?text=Jane+Smith',
            rating: 4
        },
        {
            name: 'Robert Brown',
            text: 'Great quality and customer service. Will definitely use again.',
            image: 'https://via.placeholder.com/150?text=Robert+Brown',
            rating: 5
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
            <h1 className="text-center my-5">Welcome to Laundry Service</h1>
            <Carousel className="mb-5">
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://img.baba-blog.com/2024/04/Front-loading-washing-and-drying-machines-for-industrial-and-home-usage.jpg?x-oss-process=style%2Ffull"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Quality Laundry Service</h3>
                        <p className='jp'>Reliable and affordable laundry services at your doorstep.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://www.rishabhsoft.com/wp-content/uploads/2022/01/Laundry-Management-System-Development-1200x600-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Expert Dry Cleaning</h3>
                        <p className='jo'>Professional dry cleaning for your delicate fabrics.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src="https://i.insider.com/5ea06be7a34b3c74de4f11a4?width=1200&format=jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Top-notch Ironing</h3>
                        <p className='jo'>Keep your clothes crisp and wrinkle-free.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

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

            <h2 className="text-center my-5">Customer Reviews</h2>
            <Row>
                {reviews.map((review, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="review-card">
                            <Card.Img variant="top" src={review.image} />
                            <Card.Body>
                                <Card.Title>{review.name}</Card.Title>
                                <Card.Text>
                                    {review.text}
                                </Card.Text>
                                <div className="rating">
                                    {[...Array(review.rating)].map((star, i) => (
                                        <FaStar key={i} color="#ffc107" />
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <h2 className="text-center my-5">Company Achievements</h2>
            <Row className="text-center mb-5">
                <Col md={4}>
                    <h3>10,000+ Happy Customers</h3>
                    <p>We've served over 10,000 satisfied customers since our inception.</p>
                </Col>
                <Col md={4}>
                    <h3>500+ 5-Star Reviews</h3>
                    <p>Our customers love us, as shown by our 500+ 5-star reviews.</p>
                </Col>
                <Col md={4}>
                    <h3>Award-Winning Service</h3>
                    <p>Recognized as the best laundry service provider in the region.</p>
                </Col>
            </Row>

            <h2 className="text-center my-5">About Us</h2>
            <Row className="mb-5">
                <Col md={6}>
                    <h3>Our Company</h3>
                    <p>We are committed to providing top-notch laundry and dry cleaning services to our community. Our state-of-the-art facilities and experienced staff ensure your clothes are treated with the utmost care.</p>
                </Col>
                <Col md={6}>
                    <h3>Our Mission</h3>
                    <p>Our mission is to make laundry and dry cleaning convenient and affordable for everyone. We strive to deliver exceptional service that exceeds our customers' expectations.</p>
                </Col>
            </Row>

            <h2 className="text-center my-5">Contact Us</h2>
            <Row className="text-center mb-5">
                <Col md={6}>
                    <h3>Our Location</h3>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3159022981936!2d144.96315751532164!3d-37.81362797975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a9b17fafe13!2sVictoria%20State%20Library!5e0!3m2!1sen!2sin!4v1614147799825!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </Col>
                <Col md={6}>
                    <h3>Contact Details</h3>
                    <p>Email: contact@laundryservice.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} color="#E1306C" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} color="#1DA1F2" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} color="#1877F2" />
                        </a>
                    </div>
                </Col>
            </Row>

            <footer className="text-center my-5">
                <p>&copy; 2024 Laundry Service. All rights reserved.</p>
            </footer>
        </Container>
    );
}

export default Home;

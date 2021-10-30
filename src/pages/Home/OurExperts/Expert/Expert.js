import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { expartise, id, name, photoUrl } = expert;


    return (
        <Row className="mb-4" data-aos="fade-up"
            data-aos-duration="500">
            <Col>
                <Card>
                    <Card.Img variant="top" src={photoUrl} style={{ width: '100%', height: '11rem' }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div>
                            <p>Expert on {expartise}</p>
                            <Button variant="success">See Details</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Expert;
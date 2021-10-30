import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router';
const Parts = ({ parts }) => {
    const { name, imgUrl, price, description, advice, id } = parts;
    const history = useHistory()


    const handlePartsShowDetails = () => {
        history.push(`/partsDetails/${id}`)
    }

    return (
        <Row className="mb-4" data-aos="fade-up"
            data-aos-duration="500">
            <Col >
                <Card>
                    <Card.Img variant="top" src={imgUrl} style={{ height: '20rem' }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 130)}
                        </Card.Text>
                        <div className="d-flex justify-content-around">
                            <h3>${price}</h3>
                            <Button onClick={handlePartsShowDetails} variant="success">
                                Show Details</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Parts;
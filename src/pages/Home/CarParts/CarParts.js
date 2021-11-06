import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import useCarParts from '../../../Hooks/useCarParts';
import Parts from './Parts/Parts';
const axios = require('axios').default;

const CarParts = () => {
    const { carParts, setCarParts } = useCarParts()

    return (
        <div className="container mx-auto mt-5">
            <h1 id="CarParts" className="fw-bold text-start mb-4">Our Car Parts</h1>
            <Row xs={1} md={2} lg={3} className="g-1 mx-auto">
                {carParts &&
                    carParts.map(parts => <Parts
                        key={parts._id}
                        parts={parts} />)
                }
            </Row>
        </div >
    );
};

export default CarParts;
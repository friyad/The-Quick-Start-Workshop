import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import useCarParts from '../../../Hooks/useCarParts';
import Parts from './Parts/Parts';

const CarParts = () => {
    const { carParts, setCarParts } = useCarParts()

    return (
        <div className="container mx-auto mt-5">
            <h1 id="CarParts" className="fw-bold text-start mb-4">Our Car Parts</h1>
            <Row xs={1} md={2} lg={3} className="g-1 mx-auto">
                {carParts &&
                    carParts.map(parts => <Parts
                        key={parts.id}
                        parts={parts} />)
                }
            </Row>
        </div >
    );
};

export default CarParts;
import React, { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useCarParts from '../../../Hooks/useCarParts';
import Parts from './Parts/Parts';
const axios = require('axios').default;

const CarParts = () => {
    const { carParts, setCarParts } = useCarParts()
    console.log(carParts)
    return (
        <div className="container mx-auto mt-5">
            {!carParts
                ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

                : <>  <h1 id="CarParts" className="fw-bold text-start mb-4">Our Car Parts</h1>
                    <Row xs={1} md={2} lg={3} className="g-1 mx-auto">
                        {carParts &&
                            carParts.map(parts => <Parts
                                key={parts._id}
                                parts={parts} />)
                        }
                    </Row>
                </>}
        </div >
    );
};

export default CarParts;
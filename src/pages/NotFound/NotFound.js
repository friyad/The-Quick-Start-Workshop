import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../images/404_not_found.png'

const NotFound = () => {
    return (
        <div className="py-5 mb-5" >
            <div className="py-5 my-5">
                <div className="row container mx-auto">
                    <div className="col-12">
                        <img src={NotFoundImage} alt="" className="w-50" />
                    </div>

                    <div className="col">
                        <h1 className="text-danger fw-bolder">We could not found your page</h1>
                        <h5>Please go back home and try again letter</h5>
                        <Link to="/home#home">
                            <Button variant="outlined-warning" className="px-4 py-2 mt-2"
                                style={{ backgroundColor: '#f46518', color: 'white', }}>
                                Go Back Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
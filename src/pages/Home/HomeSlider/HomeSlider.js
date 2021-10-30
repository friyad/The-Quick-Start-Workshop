import React from 'react';
import { Carousel } from 'react-bootstrap';


const HomeSlider = () => {

    return (
        <div className="bg-black">
            <Carousel fade>
                <Carousel.Item >
                    <img
                        className="d-block w-100" style={{ height: '40rem', opacity: '45%' }}
                        src="https://i.ibb.co/WDC3Czj/1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '40rem', opacity: '45%' }}
                        src="https://i.ibb.co/g6Sqnsq/2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '40rem', opacity: '45%' }}
                        src="https://i.ibb.co/71zJnVD/Auto-mechanic-working-in-the-garage-Service-and-maintenance-and-car-maintenance.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '40rem', opacity: '45%' }}
                        src="https://i.ibb.co/FBkLQG6/4.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '40rem', opacity: '45%' }}
                        src="https://i.ibb.co/DK8VrZY/5.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '40rem', opacity: '45%' }}
                        src="https://i.ibb.co/0GNVGg5/6.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeSlider;
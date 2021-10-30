import { useParams, useHistory } from 'react-router';
import React from 'react';
import useCarParts from '../../../../Hooks/useCarParts';

const PartsDetails = () => {
    const { carParts, setCarParts } = useCarParts()
    const { partsId } = useParams()

    let displayMatchCarParts = {};
    if (carParts) {
        const matchCarParts = carParts.find(parts => parts.id === JSON.parse(partsId))
        displayMatchCarParts = matchCarParts;
    }
    const { name, imgUrl, price, description, advice, id } = displayMatchCarParts;

    return (
        <div className="py-5">
            <div className="py-5 my-5">
                <div className="py-5 my-5 row container mx-auto">
                    <div className="col-7 text-start pe-5">
                        <h1>{name}</h1>
                        <p >{description}</p>
                        <h5>Advice for you: {advice}</h5>
                        <h2 className="my-4">${price}</h2>
                        <button className="btn btn-success">Place Order</button>
                    </div>
                    <div className="col-5">
                        <img className="w-100 h-100" src={imgUrl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsDetails;
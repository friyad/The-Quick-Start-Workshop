import React, { useEffect, useState } from 'react';

const useCarParts = () => {
    const [carParts, setCarParts] = useState(null)

    useEffect(() => {
        fetch('/CarPartsData.json')
            .then(res => res.json())
            .then(data => setCarParts(data))
    }, [])

    return { carParts, setCarParts }
};

export default useCarParts;
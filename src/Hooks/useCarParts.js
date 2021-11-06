import React, { useEffect, useState } from 'react';

const useCarParts = () => {
    const [carParts, setCarParts] = useState(null)

    useEffect(() => {
        fetch('https://intense-citadel-70011.herokuapp.com/carParts')
            .then(res => res.json())
            .then(data => setCarParts(data))
    }, [])

    return { carParts, setCarParts }
};

export default useCarParts;
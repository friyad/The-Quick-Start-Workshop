import { useEffect } from "react";
import { useState } from "react";

const useExperts = () => {
    const [experts, setExperts] = useState(null)

    useEffect(() => {
        fetch('./expertsData.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return { experts, setExperts }
};

export default useExperts;
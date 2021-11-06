import { useEffect } from "react";
import { useState } from "react";

const useExperts = () => {
    const [experts, setExperts] = useState(null)

    useEffect(() => {
        fetch('https://intense-citadel-70011.herokuapp.com/experts')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return { experts, setExperts }
};

export default useExperts;
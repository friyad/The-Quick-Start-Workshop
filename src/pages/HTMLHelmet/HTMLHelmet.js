import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router';

const HTMLHelmet = () => {
    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/") {
            let grandChild = location.pathname.toUpperCase().slice(1, location.pathname.length)
            if (location.hash) {
                grandChild += " | " + location.hash.toLocaleUpperCase().slice(1, location.hash.length)
            }
            setTitle('The Quick Start Workshop' + " | " + grandChild)
        }
    }, [location])

    return (
        <Helmet >
            <title>{title || 'The Quick Start Workshop'}</title>
            <meta name="description" content="Helmet application" />
        </Helmet>

    );
};

export default HTMLHelmet;
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const QuoteRequestButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/QuoteRequest');
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Ajánlatkérés
        </button>
    );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Tudnivalók
        </button>
    );
};
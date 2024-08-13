import React from 'react';
import { useNavigate } from 'react-router-dom';


export const NavigateToMapButton = ({ label, markerPosition }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/map', { state: { markerPosition } });
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            {label}
        </button>
    );
};




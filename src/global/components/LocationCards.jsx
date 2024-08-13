import React, { useState } from 'react';
import './Cards.css';
import { Collapse } from 'react-bootstrap';

export const LocCards = ({ cards }) => {
    if (!cards) {
        return <div>No cards available</div>;
    }

    return (
        <div className="custom-transparent-container">
            <div className="row g-4 justify-content-evenly">
                {cards.map((card) => (
                    <div className="col location-col-width" key={card.id}>
                        <CardComponent card={card} />
                    </div>
                ))}
            </div>
        </div>
    );
};


const CardComponent = ({ card }) => {
    const [open, setOpen] = useState(false);

    const handleCardClick = () => {
        setOpen(!open);
    };

    return (
        <div className="card styled-shadow h-100" onClick={handleCardClick}>
            <img src={card.imgSrc} className="card-img-top position-location-img" alt={card.imgAlt} />
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>

                <Collapse in={open}>
                    <div className="card-text">{card.text}</div>
                </Collapse>

                {!open && (
                    <p className="card-text">
                        {card.text.substring(0, 100)}... { }
                    </p>
                )}
            </div>
            <div className="card-footer styled-links-updates">
                <small className="text-muted">{card.updated}</small>
            </div>
        </div>
    );
};

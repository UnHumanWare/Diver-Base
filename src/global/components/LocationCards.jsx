import React from 'react';
import './Cards.css'


export const LocCards = ({ cards }) => {
    if (!cards) {
        return <div>No cards available</div>;
    }

    return (
        <div className="container custom-transparent-container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {cards.map((card) => (
                    <div className="col" key={card.id}>
                        <div className="card styled-shadow h-100">
                            <img src={card.imgSrc} className="card-img-top position-location-img" alt={card.imgAlt} />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                            </div>
                            <div className="card-footer styled-links-updates">
                                <a href={card.link} className="card-link">Card link</a>
                                <small className="text-muted">{card.updated}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};







{/* <div className="row row-cols-1 row-cols-md-3 g-4">
            {cards.map((card) => (
                <div className="col" key={card.id}>
                    <div className="card h-100">
                        <img src={card.imgSrc} className="card-img-top" alt={card.imgAlt} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.text}</p>
                        </div>
                        <div className="card-footer">
                            <a href={card.link} className="card-link">Card link</a>
                            <small className="text-muted">{card.updated}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div> */}
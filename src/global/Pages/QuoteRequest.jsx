import React, { useState } from 'react';

export const QuoteRequest = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        destination: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Ajánlatkérés elküldve:', formData);
    };

    return (
        <div className="container mt-5">
            <h2>Ajánlatkérés</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Név</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Válassz egy búvár úti célt</label>
                    <select
                        className="form-select"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Válassz egy úti célt...</option>
                        <option value="Bali">Bali</option>
                        <option value="Maldiv-szigetek">Maldiv-szigetek</option>
                        <option value="Egyiptom">Egyiptom</option>
                        <option value="Karib-térség">Karib-térség</option>
                        <option value="Thaiföld">Thaiföld</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Megjegyzés</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Ajánlatot kérek</button>
            </form>
        </div>
    );
};

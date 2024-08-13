import React from 'react';
import "./HomePage.css";


const Home = () => {
  return (
    <div className='home-page-background'>

      <div className="main-title">
        <h1>Üdvözlünk a Divers Basen</h1>
        <a href="/Locations" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p>Fedezd fel a világ legjobb búvárhelyeit!</p>
        </a>

      </div>

    </div>
  );
};

export default Home;

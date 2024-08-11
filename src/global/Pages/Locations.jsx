import React from 'react';
import "./DivingLoc.css";
import { LocCards } from "../components/LocationCards.jsx";
import { cardData } from '../components/Cards.jsx';



const Locations = () => {
  return (

    <div className="diving-location-page">
      <h1>Popular Diving Locations</h1>




      <div className="flex-align-start location-img-area">
        <div className="text">
          <h4>Great Barrier Reef, Ausztrália:</h4> A világ legnagyobb korallzátony rendszere, lenyűgöző korallokkal és gazdag tengeri élővilággal.
        </div>

        <LocCards cards={cardData[0]} />

      </div>


      <div className="flex-align-end location-img-area">
        <div className="text">
          <h4>Blue Hole, Belize:</h4> Egy hatalmas tengeri lyuk, amely híres mély víz alatti barlangjairól és különleges geológiai képződményeiről.
        </div>

        <LocCards cards={cardData[1]} />

      </div>


      <div className="flex-align-start location-img-area">
        <div className="text">
          <h4>Raja Ampat, Indonézia:</h4> Ismert hihetetlenül változatos tengeri élővilágáról és érintetlen korallzátonyairól.
        </div>


        <LocCards cards={cardData[2]} />

      </div>




      <div className="flex-align-end location-img-area">
        <div className="text">
          <h4>Palau:</h4> Számos híres merülőhely, köztük a Blue Corner és a German Channel, amelyek gazdag tengeri életet és látványos falakat kínálnak.
        </div>

        <LocCards cards={cardData[3]} />

      </div>



      <div className="flex-align-start location-img-area">
        <div className="text">
          <h4>Galápagos-szigetek, Ecuador:</h4> Különleges hely a nagy tengeri élőlények, például cápák, ráják és teknősök megfigyelésére.
        </div>

        <LocCards cards={cardData[4]} />

      </div>


      <div className="flex-align-end location-img-area">
        <div className="text">
          <h4>Malapascua, Fülöp-szigetek:</h4> Híres a thresher cápák és különleges makro élőlények megfigyeléséről.
        </div>

        <LocCards cards={cardData[5]} />

      </div>


      <div className="flex-align-start location-img-area">
        <div className="text">
          <h4>Cocos Island, Costa Rica:</h4> Ismert a nagy cápák, különösen a pörölycápák rajairól.
        </div>

        <LocCards cards={cardData[6]} />

      </div>


      <div className="flex-align-end location-img-area">
        <div className="text">
          <h4>Sipadan, Malajzia:</h4> Világszínvonalú merülőhely, amely híres tiszta vízéről, korallzátonyairól és változatos tengeri élővilágáról.
        </div>

        <LocCards cards={cardData[7]} />

      </div>


      <div className="flex-align-start location-img-area">
        <div className="text">
          <h4>Red Sea, Egyiptom:</h4> Különleges merülési lehetőségeket kínál, például a Thistlegorm roncsának felfedezése és a színes korallzátonyok megfigyelése.
        </div>

        <LocCards cards={cardData[8]} />

      </div>


      <div className="flex-align-end location-img-area">
        <div className="text">
          <h4>Komodo National Park, Indonézia:</h4> A komodói varánuszok otthona, emellett gazdag tengeri élővilágot és gyönyörű korallzátonyokat kínál.
        </div>

        <LocCards cards={cardData[9]} />

      </div>





    </div>


  );
};

export default Locations;

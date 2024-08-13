import React from 'react';
import "./DivingLoc.css";
import { LocCards } from "../components/LocationCards.jsx";
import { cardData } from '../components/Cards.jsx';
import { QuoteRequestButton } from '../components/QuoteRequestButton.jsx';
import { AboutButton } from "../components/AboutButton.jsx";
import { NavigateToMapButton } from "../components/MarkerButton.jsx";


const Locations = () => {
  return (

    <div className="row diving-location-page align-item-center">
      <h1>Népszerű búvárhelyek</h1>




      <div className="row location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Great Barrier Reef, Ausztrália:</h4> A világ legnagyobb korallzátony rendszere, lenyűgöző korallokkal és gazdag tengeri élővilággal.


        </div>


        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[0]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>




        </div>

        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Great Barrier Reef" markerPosition={[18.2871, 147.6992]} />
          </div>
        </div>

      </div>


      <div className="row flex-row flex-xl-row-reverse location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Blue Hole, Belize:</h4> Egy hatalmas tengeri lyuk, amely híres mély víz alatti barlangjairól és különleges geológiai képződményeiről.
        </div>

        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[1]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>


        </div>

        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Blue Hole" markerPosition={[17.3156, 87.5344]} />
          </div>
        </div>


      </div>


      <div className="row location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Raja Ampat, Indonézia:</h4> Ismert hihetetlenül változatos tengeri élővilágáról és érintetlen korallzátonyairól.
        </div>


        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[2]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>



        </div>


        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Raja Ampat" markerPosition={[0.2346, 130.5070]} />
          </div>
        </div>

      </div>




      <div className="row flex-row flex-xl-row-reverse location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Palau:</h4> Számos híres merülőhely, köztük a Blue Corner és a German Channel, amelyek gazdag tengeri életet és látványos falakat kínálnak.
        </div>

        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[3]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>


        </div>


        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Palau" markerPosition={[7.5149, 134.5825]} />
          </div>
        </div>


      </div>



      <div className="row location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Galápagos-szigetek, Ecuador:</h4> Különleges hely a nagy tengeri élőlények, például cápák, ráják és teknősök megfigyelésére.
        </div>

        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[4]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>



        </div>


        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Galápagos-szigetek" markerPosition={[0.9538, 90.9656]} />
          </div>
        </div>

      </div>


      <div className="row flex-row flex-xl-row-reverse location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Malapascua, Fülöp-szigetek:</h4> Híres a thresher cápák és különleges makro élőlények megfigyeléséről.
        </div>

        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[5]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>



        </div>


        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Malapascua" markerPosition={[11.3333, 124.1167]} />
          </div>
        </div>

      </div>


      <div className="row location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Cocos Island, Costa Rica:</h4> Ismert a nagy cápák, különösen a pörölycápák rajairól.
        </div>

        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[6]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>



        </div>


        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Cocos Island" markerPosition={[5.5250, 87.0683]} />
          </div>
        </div>

      </div>


      <div className="row flex-row flex-xl-row-reverse location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Sipadan, Malajzia:</h4> Világszínvonalú merülőhely, amely híres tiszta vízéről, korallzátonyairól és változatos tengeri élővilágáról.
        </div>

        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[7]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>




        </div>

        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Sipadan" markerPosition={[4.1142, 118.6284]} />
          </div>
        </div>

      </div>


      <div className="row location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Red Sea, Egyiptom:</h4> Különleges merülési lehetőségeket kínál, például a Thistlegorm roncsának felfedezése és a színes korallzátonyok megfigyelése.
        </div>

        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[8]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>



        </div>


        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Red Sea (Hurgada környéke)" markerPosition={[27.2579, 33.8116]} />
          </div>
        </div>

      </div>


      <div className="row flex-row flex-xl-row-reverse location-img-area align-items-center">
        <div className="locations-text col-12 col-xl-4">
          <h4>Komodo National Park, Indonézia:</h4> A komodói varánuszok otthona, emellett gazdag tengeri élővilágot és gyönyörű korallzátonyokat kínál.
        </div>

        <div className="col-12 col-xl-8">
          <LocCards cards={cardData[9]} />
        </div>

        <div className="locations-text col-12 col-xl-4">
          <p>Ha esetleg felkeltettük az érdeklődését, a búvárkodás íránt, itt talál több tudnivalót! Továbbá ajánlatotkérhet a megfelelő gombra kattintva.</p>



        </div>


        <div className="col-12 col-xl-8">
          <div className="d-flex justify-content-between">
            <AboutButton />
            <QuoteRequestButton />
            <NavigateToMapButton label="Komodo National Park" markerPosition={[8.5662, 119.4880]} />
          </div>
        </div>

      </div>





    </div>


  );
};

export default Locations;

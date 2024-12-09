import React from "react";
import Header from "./Header";
import GarageBackground from "../Image/GarageBackground.png";

const Despre = () => {
  return (
    <div>
      <Header />
      <body className="about-us">
        <div>
          <img src={GarageBackground} alt="" className="background-about" />
        </div>

        <section className="description-section">
          <h1 className="contact-title">CINE SUNTEM</h1>
          <p>
            Suntem un atelier auto cu experienta in oferirea de servicii de
            intretinere reparatii si diagnosticare pentru toate tipurile de
            vehicle. ne mandrim ci echipa noastra de profesionisti claificati si
            cu tehnologia de ultima generatie pe care o folosim pentru a garanta
            satisfactia clientilor.
          </p>
          <p>
            Scopul nostru este sa asiguram siguranta si performanta vehiculului
            tau. Indiferent de marca masinii suntem aici penru a oferi solutii
            personalizate si eficiente
          </p>
        </section>
        <section className="about">
          <h1 className="subtitle">SERVICII</h1>
          <ul className="about-list-1">
            <li className="box">Diagnosticare computerizata</li>
            <li className="box">Reparatii mecanice si electrice</li>
            <li className="box">Intretinere periodica</li>
            <li className="box">Vopsitorie si tinichigerie</li>
          </ul>
        </section>
      </body>
    </div>
  );
};

export default Despre;

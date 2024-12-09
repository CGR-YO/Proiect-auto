import React from "react";
import { Link } from "react-router-dom";
import GarageImage from "../Image/GarageImage.png";
import TehnicalSuport from "../Image/TehnicalSuport.png";
import RepairingServices from "../Image/RepairingServices.png";
import LogoCar from "../Image/LogoCar.png";

const MyContent = () => {
  return (
    <div>
      <div className="box-content">
        <h2>DE CE SA NE ALEGI PE NOI?</h2>

        <p className="first-line">
          Suntem unul dintre cele mai moderne si mai bune service-uri auto din
          localitate.
          <br />
          Toate operatiunile de service si electricitate sunt efectuate de
          mecanici si electricieni cu experienta.
          <br />
          Alege profesionist.
        </p>
        <div>
          <Link to="/programari">
            <button className="first-buton">FA O PROGRAMARE</button>
          </Link>
        </div>

        <h2 className="subtitle-list">TIPURI DE AUTOVEHICULE</h2>
        <div className="box-tehnical">
          <img src={TehnicalSuport} alt="" className="tehnical-image" />

          <h2 className="first-subtitle">FIECARE LUCRARE ESTE PERSONALA</h2>
          <div>
            <p className="subtitle-content-1">
              Dacă doriți calitatea pe care ați aștepta-o de la dealer,
              <br /> dar cu o atmosferă mai personală și prietenoasă, ați
              <br />
              găsit-o.
            </p>
          </div>
        </div>

        <div>
          <img src={RepairingServices} alt="" className="repairing-image" />
          <h2 className="second-subtitle">CELE MAI BUNE ECHIPAMENTE</h2>
          <div>
            <p className="subtitle-content-2">
              Am investit în toate cele mai recente instrumente de
              <br />
              specialitate și software-ul de diagnosticare care este
              <br /> adaptat în mod special pentru software-ul din
              <br /> vehiculul dvs.
            </p>
          </div>
        </div>
        <div>
          <img src={LogoCar} alt="" className="car-image" />
          <h2 className="third-subtitle">STANDARDE PROFESIONALE</h2>
          <div>
            <p className="subtitle-content-3">
              Service-ul nostru de autoturisme este capabil sa
              <br /> deserveasca o varietate de modele. Noi facem doar
              <br /> munca necesară pentru a rezolva problema.
            </p>
          </div>
        </div>
        <div>
          <div className="list-div">
            <ul className="first-list">
              <li className="box-cars">General Motors</li>
              <li className="box-cars">Land Rover</li>
              <li className="box-cars">Lexus</li>
              <li className="box-cars">Toyota</li>
              <li className="box-cars">Mazda</li>
              <li className="box-cars">Seat</li>
              <li className="box-cars">Peugeot</li>
            </ul>
          </div>
          <div>
            <ul className="second-list">
              <li className="box-cars">Mercedes-Benz</li>
              <li className="box-cars">BMW</li>
              <li className="box-cars">Mitsubishi</li>
              <li className="box-cars">Nissan</li>
              <li className="box-cars">Renault</li>
              <li className="box-cars">Dacia</li>
            </ul>
          </div>
          <div>
            <ul className="third-list">
              <li className="box-cars">Skoda</li>
              <li className="box-cars">Porche</li>
              <li className="box-cars">Rover</li>
              <li className="box-cars">Saab</li>
              <li className="box-cars">VW</li>
              <li className="box-cars">Audi</li>
              <li className="box-cars">Hummer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="container-info">
          <div className="adress-left">
            <h3>Zalău, str.21 Decembrie 1989 nr. 20</h3>
            <p>Telefon: +40 756 853 987</p>
            <p>Asistenţă Rutieră: +40 746 287 326</p>
          </div>
          <div className="hours">
            <h4>Orar</h4>
            <ul className="adress-right">
              <li>Luni - Vineri: 8:30 - 17:30</li>
              <li>Sâmbată-Duminică: Închis </li>
            </ul>
          </div>
          <div className="services-info">
            <h4>Servicii</h4>
            <ul className="list">
              <li>Diagnoză Motor</li>
              <li>Schimb ulei si filtre</li>
              <li>Reparatii Mecanice</li>
              <li>Aer Condiţionat</li>
              <li>Reparatii Cutie de Viteze</li>
              <li>Reparaţii Direcţie si Suspensii</li>
              <li>Reparatii Motor HYBRID</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContent;

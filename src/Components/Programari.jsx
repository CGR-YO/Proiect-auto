import React from "react";
import Header from "./Header";
import GarageBackground from "../Image/GarageBackground.png";
import Inside from "../Image/Inside.png";
const Programari = () => {
  return (
    <div>
      <Header />
      <img src={Inside} alt="" className="inside-garage" />
      <div className="form-wrapper">
        <div className="first-form">
          <form className="second-form">
            <h1 className="title">DETALII</h1>
            <label>Nume:</label>
            <input type="text" name="nume" placeholder="Nume" />
            <label>Prenume</label>
            <input type="text" name="prenume" placeholder="Prenume" />
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
            <label>Km:</label>
            <input type="number" name="km" placeholder="Km" />
            <select value="myCar" onClick="onClick" className="first-select">
              <option value="Marca">Marca</option>
              <option value="Land Rover">Land Rover</option>
              <option value="Lexus">Lexus</option>
              <option value="Toyota">Toyota</option>
              <option value="Mazda">Mazda</option>
              <option value="Seat">Seat</option>
              <option value="Peugeot">Peugeot</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="BMW">BMW</option>
              <option value="Mithubishi">Mitsubishi</option>
              <option value="Nissan">Nissan</option>
              <option value="Renault">Renault</option>
              <option value="Dacia">Dacia</option>
              <option value="Hummer">Hummer</option>
              <option value="Audi">Audi</option>
              <option value="VW">VW</option>
              <option value="Saab">Saab</option>
            </select>
            <button className="submit-button">
              <h3>Submit</h3>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Programari;

import React from "react";
import "../Cards.css";
import AboutCardItem from "./AboutCardItem";

function ServicesCards() {
  return (
    <div className="cards">
      <h1>What is WAITQR?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <AboutCardItem
              src="images/img-9.jpg"
              text="Lipsmacking sizzlers and appetizers."
              label="Starters"
              path="/"
            />
            <AboutCardItem
              src="images/img-2.jpg"
              text="Indian, Chinese, Mexican and more!"
              label="Main Course"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <AboutCardItem
              src="images/img-3.jpg"
              text="I scream you scream we ALL scream for icecream."
              label="Icecreams"
              path="/"
            />
            <AboutCardItem
              src="images/img-4.jpg"
              text="Rasgulla to mysore pak we've got you covered!"
              label="Desert"
              path="/"
            />
            <AboutCardItem
              src="images/img-8.jpg"
              text="Delhi chat and more!"
              label="Snacks"
              path="/sign-up"
            />
            <AboutCardItem
              src="images/img-8.jpg"
              text="Tea or Coffee?"
              label="Beverages"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;

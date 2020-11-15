import React from "react";
import "../Cards.css";
import AboutCardItem from "./AboutCardItem";

function AboutCards() {
  return (
    <div className="cards">
      <h1>What is WAITQR?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <AboutCardItem
              src="images/img-9.jpg"
              text="With most people skeptical about going out to eat due to sanitization concerns, hotels are finding it difficult to assure customers their safety. We want to bridge the gap between customers and businesses by providing a safer environment to interact in."
              label="Our Story"
              path="/"
            />
            <AboutCardItem
              src="images/img-2.jpg"
              text="If you wish to maintain your customers’ loyalty, engagement and advocacy, their safety should remain an absolute priority regardless of you engaging with them in-person or online. So, we present to you WAITQR. WAITQR makes ordering hassle free."
              label="Why WAITQR"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <AboutCardItem
              src="images/img-3.jpg"
              text="As this is a web app, you don’t have to worry about downloading any app. Just scan the QR code on your table and you’re good to go!"
              label="No Installations"
              path="/"
            />
            <AboutCardItem
              src="images/img-4.jpg"
              text="This simple web app doesn’t consume a lot of your data. It doesn’t slow down your phone. Place orders faster at your own comfort without moving an inch!"
              label="Efficient"
              path="/"
            />
            <AboutCardItem
              src="images/img-8.jpg"
              text="This app is going nowhere once the pandemic ends because the world needs us to cut down waiting time and ensure a smooth service."
              label="After Pandemic"
              path="/sign-up"
            />
            <AboutCardItem
              src="images/img-8.jpg"
              text="Software updates will include identify regular customers, 
              notify customers about discounts and recommend new hotels"
              label="Software Updates"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutCards;

import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments here</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, in
            illo eum voluptatum quibusdam reprehenderit? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Ullam placeat dicta ad sunt
            veritatis, laborum nostrum eius, itaque nobis suscipit voluptatum
            velit explicabo similique autem tempora expedita libero eum beatae?
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="name" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

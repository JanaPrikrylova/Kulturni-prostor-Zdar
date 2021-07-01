import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <section className="home">
      <h1>Naše služby</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit adipisicing
        elit.
      </p>
      <div className="home__content">
        <div className="home__card">
          <img
            className="home__img"
            src="/assets/Pavel Vodnansky5.jpeg"
            alt="rose"
          />
          <div>
            <p className="home__desc">
              Excepturi deserunt quaerat saepe distinctio illum perferendis, at
              architecto voluptates quidem.
            </p>
            <p className="home__desc-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              aliquam.
            </p>
            <Link className="home__title" to="/exhibitions">
              VÝSTAVY
            </Link>
          </div>
        </div>
        <div className="home__card">
          <img
            className="home__img"
            src="/assets/Pavel Vodnansky4.jpeg"
            alt="pictures on the wall"
          />
          <div>
            <p className="home__desc">
              Excepturi deserunt quaerat saepe distinctio illum perferendis, at
              architecto voluptates quidem.
            </p>
            <p className="home__desc-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              aliquam.
            </p>
            <Link className="home__title" to="/space">
              PRONÁJEM PROSTOR
            </Link>
          </div>
        </div>
        <div className="home__card">
          <img
            className="home__img"
            src="/assets/Pavel Vodnansky2.jpeg"
            alt="easels"
          />
          <div>
            <p className="home__desc">
              Excepturi deserunt quaerat saepe distinctio illum perferendis, at
              architecto voluptates quidem.
            </p>
            <p className="home__desc-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              aliquam.
            </p>
            <Link className="home__title" to="/courses">
              KURZY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

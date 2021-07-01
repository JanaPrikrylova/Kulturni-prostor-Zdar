import React from 'react';
import './style.css';

export const Contact = () => {
  return (
    <>
      <section class="location">
        <h1 className="contact__title">Kontaktní údaje</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.6236256359275!2d14.483172916001745!3d50.037147979420396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93cbe6f4c3a5%3A0xbd6722de373cbe99!2sBab%C3%A1kova%202157%2C%20148%2000%20Praha%2011-Chodov!5e0!3m2!1scs!2scz!4v1624478479545!5m2!1scs!2scz"
          width="600"
          height="450"
          style={{}}
        ></iframe>
      </section>
      <section className="contact">
        <div className="contact__content">
          <div className="contact__card">
            <div className="contact__item">
              <i className="fa fa-home"></i>
              <span>
                <p>
                  <strong>Babákova 2157/16, Praha 4 Chodov</strong>
                </p>
              </span>
            </div>
            <div className="contact__item">
              <i className="fa fa-phone"></i>
              <span>
                <p>
                  <strong>+420 732 464 420</strong>
                </p>
                <p>
                  <strong>Pondělí - Pátek, 9:00 - 18:00</strong>
                </p>
              </span>
            </div>
            <div className="contact__item">
              <i className="fa fa-envelope-o"></i>
              <span>
                <p>
                  <strong>info@kpz.cz</strong>
                </p>
              </span>
            </div>
          </div>
          <div className="contact__card">
            <form>
              <input
                type="text"
                placeholder="Zadejte jméno a příjmení..."
                required
              />
              <input
                type="email"
                placeholder="Zadejte emailovou adresu..."
                required
              />
              <input
                type="text"
                placeholder="Zadejte předmět zprávy..."
                required
              />
              <textarea
                rows="8"
                placeholder="Napište vaši zprávu..."
                required
              ></textarea>
              <button type="submit" className="contact__button">
                ODESLAT ZPRÁVU
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

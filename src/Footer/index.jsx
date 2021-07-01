import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__left">
          <h1>Otevírací doma</h1>
          <p>
            <i className="fa fa-clock-o"></i>Pondělí - Pátek: 9:00 - 19:00
          </p>
          <p>
            <i className="fa fa-clock-o"></i>Sobota - Neděle: 9:00 - 21:00
          </p>
        </div>
        <div className="footer__right">
          <h1>Zůstaň v kontaktu</h1>
          <p>
            Babákova 2157/16, Praha 4<i className="fa fa-map-marker"></i>
          </p>
          <p>
            info@kpz.cz<i className="fa fa-paper-plane"></i>
          </p>
          <p>
            732 464 420<i className="fa fa-phone"></i>
          </p>
        </div>
        <div className="footer__icon">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
};

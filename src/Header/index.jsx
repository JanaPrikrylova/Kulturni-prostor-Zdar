import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';


export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <section className="menu">
      <nav>
        <Link className="menu__logo" to="/">KPZ. Kulturní prostor Zdar</Link>
        <div className={open ? "menu__nav--opened menu__nav": "menu__nav"}>
          <i className="fa fa-times" onClick={handleClick}></i>
            <ul>
              <li className="menu__item"><Link className="menu__link" to="/">Domů</Link></li>
              <li className="menu__item"><Link className="menu__link" to="/exhibitions">Výstavy</Link></li>
              <li className="menu__item"><Link className="menu__link" to="/space">Pronájem prostor</Link></li>
              <li className="menu__item"><Link className="menu__link" to="/courses">Kurzy</Link></li>
              <li className="menu__item"><Link className="menu__link" to="/contact">Kontakt</Link></li>
            </ul>
        </div>
        <i className="fa fa-bars" onClick={handleClick}></i>
      </nav>
      <div className="menu__content">
        <h1>Kulturní prostor Zdar</h1>
      </div> 
    </section>
  );
};


{/* <header>
      <div className="menu">
        <div className="menu__container">
          <div className="menu__left-side">
            <Link className="menu__logo" to="/">KPZ.</Link>
            <Link className="menu__name" to="/">
                Kulturní prostor Zdar
            </Link>
          </div>
          <nav>
            <div className="header__hamburger-items">
              <span className="header__hamburger-text">Menu</span>
              <button
                className={
                  !open
                    ? 'header__hamburger--btn'
                    : 'header__hamburger--btn header__hamburger--btn--opened'
                }
                onClick={() => {
                  setOpen(!open);
                }}
                type="button"
                aria-label="menu"
                // aria-expanded="false"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <ul
              className={
                !open
                  ? 'header__nav--list header__nav--closed'
                  : 'header__nav--list'
              }
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="header__nav--item">
                <Link className="header__nav--link" to="/">
                  Domů
                </Link>
              </li>
              <li className="header__nav--item">
                <Link className="header__nav--link" to="/exhibitions">
                  Výstavy
                </Link>
              </li>
              <li className="header__nav--item">
                <Link className="header__nav--link" to="/space">
                  Pronájem prostor
                </Link>
              </li>
              <li className="header__nav--item">
                <Link className="header__nav--link" to="/contact">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__title">
        <h1>Kulturní prostor Zdar</h1>
        <p>
          <a class="hero-btn" href="">Kontaktujte nás</a>
        </p>
      </div>
    </header> */}
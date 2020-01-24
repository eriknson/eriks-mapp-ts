import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>
          Stor svart text <br />
          på vit bakgrund
        </h1>
        <h2>
          En mapphemsida av Erik Nilsson. <br /> Kalkylerad till minst 16,3
          miljarder impressions.
        </h2>
        <div className='header-description'>
          <p>
            Hej och välkommen. <br />
            <strong>
              Jag är en Civilingenjörsstudent vid Uppsala universitet.
            </strong>
          </p>
          <p>
            Här finns några saker jag gjort de senaste åren. Från t.ex.
            sommarjobb, kurser i skolan och andra sammanhang. Ifall du undrar
            något, skicka jättegärna{' '}
            <a href='mailto:eriks@mail.se'>
              <u>ett mail</u>
            </a>
            . Enjoy!
          </p>
        </div>
      </div>
    );
  }
}
export default Header;

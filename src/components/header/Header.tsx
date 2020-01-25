import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>
          Stor svart rubrik <br />
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
              Jag är en civilingenjörsstudent vid Uppsala universitet.
            </strong>
          </p>
          <p>
            Här finns några saker jag gjort de senaste åren. Från till exempel
            sommarjobb, kurser i skolan eller andra sammanhang. Skicka
            jättegärna{' '}
            <a href='mailto:eriks@mail.se'>
              <u>ett mail</u>
            </a>{' '}
            om du undrar något. Enjoy!
          </p>
        </div>
      </div>
    );
  }
}
export default Header;

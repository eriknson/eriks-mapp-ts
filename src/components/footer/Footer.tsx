import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-container-left'>
            <p>
              <a href='mailto:eriks@mail.se'>
                <u>eriks@mail.se</u>
              </a>{' '}
              <br />
              +46 (0) 738046047
            </p>
          </div>
          <div className='footer-container-right'>
            <p>
              Made with ♥️ and React. <br />
              GitHub repository finns{' '}
              <a href='https://github.com/eriknson/eriks-mapp-ts' target='_blank' rel='noopener noreferrer'>
                <u>här</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;

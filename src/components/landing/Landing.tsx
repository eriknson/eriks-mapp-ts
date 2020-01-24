import React, { Component } from 'react';

import Header from '../header/Header';
import CaseGrid from '../casegrid/CaseGrid';

class Landing extends Component {
  render() {
    return (
      <div className='landing-container'>
        <Header></Header>
        <CaseGrid></CaseGrid>
      </div>
    );
  }
}
export default Landing;

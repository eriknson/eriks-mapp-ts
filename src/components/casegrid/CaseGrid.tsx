import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CaseThumbnail from './CaseThumbnail';
import Items from '../../cases.json';

class CaseGrid extends Component {
  items = Items.items;

  render() {
    return (
      <div className='case-grid'>
        {this.items.map((caseObject, i) => (
          <Link key={i} to={'/' + caseObject.url} className='app-navigation-item'>
            <CaseThumbnail
              itemTitle={caseObject.title}
              itemCompany={caseObject.company}
              thumbnailImage={caseObject.thumbnailImage}
              itemURL={caseObject.url}
            />
          </Link>
        ))}
      </div>
    );
  }
}
export default CaseGrid;

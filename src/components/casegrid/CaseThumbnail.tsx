import React, { Component } from 'react';

interface CaseThumbnailProps {
  itemTitle?: string;
  itemCompany?: string;
  itemURL?: string;
  thumbnailImage?: string;
}

interface CaseThumbnailState {}

class CaseThumbnail extends Component<CaseThumbnailProps, CaseThumbnailState> {
  render() {
    return (
      <div className='case-thumbnail'>
        <div className='case-thumbnail-title'>
          <strong>{this.props.itemCompany}</strong> <br />
          {this.props.itemTitle}
        </div>
        <div className='case-thumbnail-img-container'>
          <img
            key={this.props.itemURL}
            className='case-thumbnail-img'
            alt='img'
            src={require('./' + this.props.thumbnailImage)}
          />
        </div>
      </div>
    );
  }
}
export default CaseThumbnail;

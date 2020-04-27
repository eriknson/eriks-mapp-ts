import React, { Component } from 'react';

interface CaseThumbnailProps {
  itemTitle?: string;
  itemCompany?: string;
  itemURL?: string;
  thumbnailImage?: string | null;
  thumbnailVideo?: string | null;
}

interface CaseThumbnailState {}

class CaseThumbnail extends Component<CaseThumbnailProps, CaseThumbnailState> {
  _getThumbnailJSX() {
    if (this.props.thumbnailImage != null) {
      console.log(this.props.thumbnailImage);
      return (
        <img
          key={this.props.itemURL}
          className='case-thumbnail-img'
          alt='img'
          src={require('./' + this.props.thumbnailImage)}
        />
      );
    } else if (this.props.thumbnailVideo != null) {
      return (
        <video className='case-thumbnail-img' autoPlay loop muted playsinline>
          <source src={require('./' + this.props.thumbnailVideo)} type='video/webm' />
          <source src={require('./' + this.props.thumbnailVideo)} type='video/mp4' />
        </video>
      );
    }
  }

  render() {
    return (
      <div className='case-thumbnail'>
        <div className='case-thumbnail-title'>
          <strong>{this.props.itemCompany}</strong> <br />
          {this.props.itemTitle}
        </div>
        <div className='case-thumbnail-img-container'>{this._getThumbnailJSX()}</div>
      </div>
    );
  }
}
export default CaseThumbnail;

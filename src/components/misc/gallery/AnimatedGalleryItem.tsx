import React, { Component } from 'react';

interface GalleryItemProps {
  order: number;
  animationDuration: number;
  animationItemCount: number;
  parentCaseURL: string;
  thumbnailImage: string;
}

interface GalleryItemState {}

class AnimatedGalleryItem extends Component<GalleryItemProps, GalleryItemState> {
  _getThumbnailJSX() {
    if (this.props.thumbnailImage != null) {
      return (
        <img
          style={{
            animationDelay: (-this.props.animationDuration / this.props.animationItemCount) * this.props.order + 's',
            animationDuration: this.props.animationDuration + 's',
          }}
          className='gallery-item'
          alt='img'
          src={require('../../../assets/' + this.props.parentCaseURL + '/' + this.props.thumbnailImage)}
        />
      );
    }
  }

  render() {
    console.log(this.props.thumbnailImage);
    return <div className='gallery-item-container'>{this._getThumbnailJSX()}</div>;
  }
}
export default AnimatedGalleryItem;

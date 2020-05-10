import React, { Component } from 'react';

interface GalleryItemProps {
  order: number;
  animationDuration: number;
  animationItemCount: number;
  itemTitle?: string;
  thumbnailImage?: string | null;
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
          src={require('../../casegrid/' + this.props.thumbnailImage)}
        />
      );
    }
  }

  render() {
    return <div className='gallery-item-container'>{this._getThumbnailJSX()}</div>;
  }
}
export default AnimatedGalleryItem;

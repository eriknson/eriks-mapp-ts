import React, { Component } from 'react';
import AnimatedGalleryItem from './AnimatedGalleryItem';

import Items from '../../../cases.json';

class AnimatedGallery extends Component {
  items = Items.items;
  cycleDuration = 60; // seconds

  render() {
    return (
      <div className='animated-gallery'>
        <div className='slider-wrapper'>
          {this.items.map((galleryItem, i) => (
            <AnimatedGalleryItem
              key={i}
              order={i}
              animationDuration={this.cycleDuration}
              animationItemCount={this.items.length}
              itemTitle={galleryItem.title}
              thumbnailImage={galleryItem.thumbnailImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AnimatedGallery;

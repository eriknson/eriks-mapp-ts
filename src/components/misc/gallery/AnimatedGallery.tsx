import React, { Component } from 'react';
import AnimatedGalleryItem from './AnimatedGalleryItem';

interface AnimatedGalleryProps {
  parentCaseURL: string;
}

class AnimatedGallery extends Component<AnimatedGalleryProps> {
  cycleDuration = 60; // seconds

  galleryItems = require('../../../assets/' +
    this.props.parentCaseURL +
    '/' +
    this.props.parentCaseURL +
    '-gallery-config.json');
  items = this.galleryItems.items;

  render() {
    return (
      <div className='animated-gallery'>
        <div className='slider-wrapper'>
          {this.items.map((galleryItem: string, i: number) => (
            <AnimatedGalleryItem
              key={i}
              order={i}
              animationDuration={this.cycleDuration}
              animationItemCount={this.items.length}
              parentCaseURL={this.props.parentCaseURL}
              thumbnailImage={galleryItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AnimatedGallery;

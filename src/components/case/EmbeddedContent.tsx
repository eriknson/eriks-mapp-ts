import React, { Component } from 'react';

type EmbeddedContentProps = {
  videoid: string;
};

export default class EmbeddedContent extends Component<EmbeddedContentProps> {
  render() {
    return (
      <div className='vimeo-item'>
        <div className='vimeo-wrap'>
          <iframe
            title={this.props.videoid}
            src={'https://player.vimeo.com/video/' + this.props.videoid + '?portrait=0'}
            width='640'
            height='360'
            frameBorder='0'
            allowFullScreen={true}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

type VimeoContainerProps = {
  videoid: String;
};

export default class VimeoContainer extends Component<VimeoContainerProps> {
  render() {
    return (
      <div className='vimeo-item'>
        <div className='vimeo-wrap'>
          <iframe
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

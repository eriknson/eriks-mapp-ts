import React, { Component } from 'react';

interface VideoComponentProps {
  videoSource: string;
}

class VideoComponent extends Component<VideoComponentProps> {
  videoItem = require('../../../assets/videos' + this.props.videoSource);

  render() {
    return (
      <div className="video-component">
        <h1>VideoComponent</h1>
      </div>
    );
  }
}

export default VideoComponent;

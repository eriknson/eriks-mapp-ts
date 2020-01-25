import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

type CaseProps = {
  metadata: any;
};

export default class Case extends Component<CaseProps> {
  render() {
    return (
      <div className='case'>
        <Link to='/' className='case-back-title'>
          <h3>
            <u>Start</u>
          </h3>
        </Link>
        <h1>{this.props.metadata.company}</h1>
        <h2>{this.props.metadata.title}</h2>
        <p className='case-intro-description'>
          {this.props.metadata.introDescription}
        </p>
        <Route path='/ibm-marketing' component={CaseSpecificIBM} />
        <Route path='/jip' component={CaseSpecificCabonline} />
      </div>
    );
  }
}

const CaseSpecificIBM = () => {
  return (
    <div className='case-video-container'>
      <div className='case-video-wrapper'>
        <ReactPlayer
          light
          className='case-react-player'
          url='https://vimeo.com/251454442'
          width='100%'
          height='100%'
        />
      </div>
      <div className='case-video-wrapper'>
        <ReactPlayer
          light
          className='case-react-player'
          url='https://www.youtube.com/watch?v=tRwk8cs32wg'
          width='100%'
          height='100%'
        />
      </div>
      <div className='case-video-wrapper'>
        <ReactPlayer
          light
          className='case-react-player'
          url='https://vimeo.com/273954295'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

const CaseSpecificCabonline = () => {
  return (
    <div className='case-video-container'>
      <div className='case-video-wrapper'>
        <ReactPlayer
          light
          className='case-react-player'
          url='https://player.vimeo.com/video/361151799'
          width='100%'
          height='100%'
        />
      </div>
      <div className='case-video-wrapper'>
        <ReactPlayer
          light
          className='case-react-player'
          url='https://vimeo.com/361151851'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

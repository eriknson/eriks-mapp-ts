import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    );
  }
}

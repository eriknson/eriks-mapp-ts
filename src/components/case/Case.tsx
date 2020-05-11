import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ScrollToTop from '../misc/scroll/ScrollToTop';
import Emoji from '../misc/emoji/Emoji';
import AnimatedGallery from '../misc/gallery/AnimatedGallery';

type CaseProps = {
  metadata: any;
};

export default class Case extends Component<CaseProps> {
  _goBack(): ((event: React.MouseEvent<HTMLInputElement>) => void) | any {
    window.history.back();
  }

  render() {
    return (
      <div className='case'>
        <ScrollToTop />

        <div className='case-back-button'>
          <button className='case-back-button-title' onClick={this._goBack}>
            <Emoji symbol='👈🏼' label='back' />
          </button>
        </div>

        <h1>{this.props.metadata.company}</h1>
        <h2>{this.props.metadata.title}</h2>
        <div className='case-p'>
          <p>{this.props.metadata.introDescription1}</p>
          <p>{this.props.metadata.introDescription2}</p>
        </div>
        <Route path='/anomali' component={CaseSpecificAnomali} />
        <Route path='/ibm-marketing' component={CaseSpecificIBM} />
        <Route path='/jip' component={CaseSpecificCabonline} />
        <Route path='/vasaloppet' component={CaseSpecificVasaloppet} />
        <Route path='/ibm-summer-internship' component={CaseSpecificMetro} />
        <Route path='/vex' component={CaseSpecificVEX} />
      </div>
    );
  }
}

const CaseSpecificAnomali = () => {
  return (
    <div>
      <div className='case-image'>
        <img
          className='case-image-img'
          key='axel-whiteboard'
          alt='img'
          src={require('../../assets/axel-whiteboard.jpg')}
        />
      </div>
      <div className='case-p'>
        <p>
          Vi gillade dem och började skissa på idéer. Efter lite avvägning föreslog vi att bygga en webbapp som
          identifierar svagheter i kollektivtrafiknätet. Från ett tidsavikelse-perspektiv och på en nivå som ger
          insikter till (bl.a.) trafikplanerare och leverantörer. Med hjälp av algoritmer från Graph Mining, och en
          frontend gjord med React och Mapbox, ska man interaktivt kunna utvärdera nätets prestanda.
        </p>
      </div>
      <AnimatedGallery parentCaseURL='anomali' />
      <div className='case-image'>
        <img className='case-image-img' key='vasaloppet' alt='img' src={require('../../assets/anomali_ss.png')} />
      </div>
      <div className='case-p'>
        <p>
          Vi tog fram en data pipeline som extraherar, aggregerar och analyserar 3,5M datapunkter (arrivals) från
          Uppsalas kollektivtrafiknät, UL.
        </p>
        <p>
          Resultatet är dels (1) ett objektivt index som beskriver hur mycket varje sträckning i ett kollektivtrafiknät
          avviker från tidtabell i en grafkontext. Och dels (2) en metod för att identifiera, och visualisera, de mest
          utsatta nod-paren i nätet, med hjälp av en algoritm som heter MINCUT-MAXFLOW.
        </p>
        <p>
          En prioritet genom projektet har varit att utforma allt så att man ska kunna byta ut och importera data från
          andra nät eller tidsintervall – så länge RAW-datan följer Google's GTFS-standard.
        </p>
      </div>
      <div className='case-image'>
        <img className='case-image-img' key='vasaloppet' alt='img' src={require('../../assets/anomali_pman.png')} />
      </div>
      <div className='case-p'>
        <p>
          Mitt i projektet tog COVID-19 över Sverige och vårt nya hem blev Google Hangouts. Vi vill verkligen tacka
          Kristiaan Pelckmans (ämnesgranskare) och Jerry Löfvenhaft (handledare) för all feedback under projektets gång!
        </p>
        <p>
          Här nedan kan ni snart se hela vårt resultat. Projektet är alltså inte helt färdigt ännu, och innehållet på
          länken nedan är d.v.s. work in progress.
        </p>
      </div>
      <div className='case-image'>
        <p>
          <strong>
            WIP:{' '}
            <u>
              <a href='https://eriknson.github.io/anomali/' target='_blank' rel='noopener noreferrer'>
                https://eriknson.github.io/anomali/
              </a>
            </u>
          </strong>
          <br />
        </p>
      </div>
    </div>
  );
};

const CaseSpecificIBM = () => {
  return (
    <div className='case-video-container'>
      <div className='case-video-wrapper'>
        <ReactPlayer className='case-react-player' url='https://vimeo.com/251454442' width='100%' height='100%' />
      </div>
      <div className='case-video-wrapper'>
        <ReactPlayer
          className='case-react-player'
          url='https://www.youtube.com/watch?v=tRwk8cs32wg'
          width='100%'
          height='100%'
        />
      </div>
      <div className='case-video-wrapper'>
        <ReactPlayer
          className='case-react-player'
          url='https://www.youtube.com/watch?v=aoHDnNVhgnU'
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
        <iframe
          className='case-react-player'
          src='https://player.vimeo.com/video/361151851'
          title='vimeoFrame'
          width='100%'
          height='100%'
        ></iframe>
      </div>
      <div className='case-video-wrapper'>
        <iframe
          className='case-react-player'
          src='https://player.vimeo.com/video/361151799'
          title='vimeoFrame'
          width='100%'
          height='100%'
        ></iframe>
      </div>
    </div>
  );
};

const CaseSpecificVasaloppet = () => {
  return (
    <div className='case-vasaloppet'>
      <AnimatedGallery parentCaseURL='vasaloppet' />
      <div className='case-image'>
        <img
          className='case-image-img'
          key='vasaloppet'
          alt='img'
          src={require('../../assets/vasaloppet-thumbnail-project.jpg')}
        />
      </div>
      <div className='case-image'>
        <img
          className='case-image-img'
          key='vasaloppet'
          alt='img'
          src={require('../../assets/vasaloppet-techstack.jpg')}
        />
      </div>
    </div>
  );
};

const CaseSpecificMetro = () => {
  return (
    <div className='case-image'>
      <img className='case-image-img' key='metrolive1' alt='img' src={require('../../assets/metrolive-img1.jpg')} />
      <img className='case-image-img' key='metrolive2' alt='img' src={require('../../assets/metrolive-img2.jpg')} />
      <img className='case-image-img' key='metrolive3' alt='img' src={require('../../assets/metrolive-img3.jpg')} />
    </div>
  );
};

const CaseSpecificVEX = () => {
  return (
    <div className='case-image'>
      <p>
        <strong>
          Se slides på{' '}
          <u>
            <a href='https://vexapp.tech/#/0' target='_blank' rel='noopener noreferrer'>
              vexapp.tech
            </a>
          </u>
        </strong>
        <br />
        (bläddra med piltangenterna)
      </p>
    </div>
  );
};

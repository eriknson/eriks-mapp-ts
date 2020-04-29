import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ScrollToTop from '../misc/scroll/ScrollToTop';
import Emoji from '../misc/emoji/Emoji';

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
        <Route path='/ibm-bachelor-thesis' component={CaseSpecificVasaloppet} />
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
          Vi gillade dem och föreslog att bygga ett analysverktyg för att identifiera svagheter i kollektivtrafiknätet,
          baserat på tidsmässiga avvikelser. Med insikter till trafikplanerare baserade på algoritmer inom Graph Mining
          och visualiserat genom en webapp gjord i React. De gillade förslaget och resten är historia!
        </p>
      </div>
      <div className='case-image'>
        <img className='case-image-img' key='vasaloppet' alt='img' src={require('../../assets/anomali_ss.png')} />
      </div>
      <div className='case-p'>
        <p>
          Vi utvecklade en data pipeline som extraherar, aggregerar och analyserar 3,5M datapunkter från Uppsala-nätet
          (UL). För att rengöra, analysera och leverera data till visualiseringen. Vi har haft som prioritet att utforma
          denna så att man lätt kan byta ut och importera data från andra nät eller tidsintervall också – så länge
          RAW-datan följer Google's GTFS-standard.
        </p>
        <p>
          Resultatet är dels ett objektivt index som beskriver hur troligt varje nod-par (edge) i nätverket är att
          avvika från tidtabell. Och dels ett sätt att identifiera och visualisera de mest utsatta förlängningarna /
          sträckningarna i nätverket, med hjälp av en algoritm som heter MINCUT-MAXFLOW.
        </p>
      </div>
      <div className='case-image'>
        <img className='case-image-img' key='vasaloppet' alt='img' src={require('../../assets/anomali_pman.png')} />
      </div>
      <div className='case-p'>
        <p>
          Mitt i projektet tog COVID-19 över Sverige och vårt nya hem blev Google Hangouts. Vi vill verkligen tacka vår
          ämnesgranskare (Kristiaan Pelckmans) och handledare (Jerry Löfvenhaft) för all feedback under projektets gång!
        </p>
        <p>
          Här nedan kan ni (snart) se vårt försök att visualisera delar av resultatet via en landningssida med
          tillhörande Mapbox-karta vi gjort till projektet. Notera att projektet inte är helt färdigt ännu och att det
          d.v.s. är work in progress.
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

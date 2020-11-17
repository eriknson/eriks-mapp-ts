import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ScrollToTop from '../misc/scroll/ScrollToTop';
import Emoji from '../misc/emoji/Emoji';
import AnimatedGallery from '../misc/gallery/AnimatedGallery';
//import VideoComponent from '../misc/video/VideoComponent';
//import ReactPlayer from 'react-player';

type CaseProps = {
  metadata: any;
};

export default class Case extends Component<CaseProps> {
  _goBack(): ((event: React.MouseEvent<HTMLInputElement>) => void) | any {
    window.history.back();
  }

  render() {
    return (
      <div className="case">
        <ScrollToTop />

        <div className="case-back-button">
          <button className="case-back-button-title" onClick={this._goBack}>
            <Emoji symbol="👈🏼" label="back" />
          </button>
        </div>

        <h1>{this.props.metadata.company}</h1>
        <h2>{this.props.metadata.title}</h2>
        <div className="case-p">
          <p>{this.props.metadata.introDescription1}</p>
          <p>{this.props.metadata.introDescription2}</p>
        </div>
        <Route path="/flow" component={CaseSpecificFlow} />
        <Route path="/ibm-marketing" component={CaseSpecificIBM} />
        <Route path="/jip" component={CaseSpecificCabonline} />
        <Route path="/vasaloppet" component={CaseSpecificVasaloppet} />
        <Route path="/ibm-summer-internship" component={CaseSpecificMetro} />
        <Route path="/vex" component={CaseSpecificVEX} />
      </div>
    );
  }
}

const CaseSpecificFlow = () => {
  return (
    <div>
      <div className="case-image">
        <img
          className="case-image-img"
          key="axel-whiteboard"
          alt="img"
          src={require('../../assets/axel-whiteboard.jpg')}
        />
      </div>
      <div className="case-p">
        <p>
          Vi gillade dem direkt och började skissa idéer. Efter en del bollande
          fram och tillbaka med vår ämnesgranskare, Kristiaan Pelckmans, landade
          vi att djupdyka i Graph Mining. Målet blev att (1) ta fram en pipeline
          som processar kollektivtrafikdatan (GTFS-datan) till att passa in i en
          flödesnätverks-modell för att (2) kunna identifiera vilka sträckor som
          dels är sårbara för avbrott (flaskhalsar), och dels riskerar att
          desintegrera stora delar av nätet vid ett potentiellt avbrott.
        </p>
        <p>
          Slutligen testar vi vår modell på riktig data från Uppsalas
          kollektivtrafiknät, UL, och visualiserar delar av resultatet i ett
          kart-gränssnitt vi tog fram (Mapbox, React).
        </p>
      </div>
      <AnimatedGallery parentCaseURL="anomali" />
      <div className="case-image">
        <img
          className="case-image-img"
          key="vasaloppet"
          alt="img"
          src={require('../../assets/anomali_ss.png')}
        />
      </div>
      <div className="case-p">
        <p>
          Massa Python Notebooks och fix i GCP senare så lyckas vi extrahera,
          processa och analysera 3.5M datapunkter (arrivals) från UL-nätet.
        </p>
        <p>
          Resultatet är dels (1) ett objektivt index som beskriver hur mycket
          varje sträckning i ett kollektivtrafiknät avviker från tidtabell i en
          grafkontext. Och dels (2) en metod för att identifiera, och
          visualisera, de mest utsatta sträckorna i nätet, med hjälp av en
          algoritm som heter MINCUT-MAXFLOW.
        </p>
        <p>
          En prioritet genom projektet har varit att utforma allt så att man ska
          kunna byta ut och importera data från andra nät eller tidsintervall –
          så länge RAW-datan följer Google's GTFS-standard.
        </p>
      </div>
      <div className="case-image">
        <img
          className="case-image-img"
          key="vasaloppet"
          alt="img"
          src={require('../../assets/anomali_pman.png')}
        />
      </div>
      <div className="case-p">
        <p>
          Halvvägs in i projektet tog COVID-19 över Sverige och vårt nya hem
          blev Google Hangouts. Vi vill verkligen tacka Kristiaan Pelckmans
          (ämnesgranskare) och Jerry Löfvenhaft (handledare) som, trots
          omständigheterna, verkligen stöttade oss under hela arbetet!
        </p>
        <p>
          Här nedan kan ni snart se hela vårt resultat. Projektet är alltså inte
          helt färdigt ännu, och innehållet på länken nedan är d.v.s. work in
          progress.
        </p>
      </div>
      <div className="case-image">
        <p>
          <strong>
            WIP:{' '}
            <u>
              <a
                href="https://eriknson.github.io/anomali/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
    <div className="case-video-container">
      <div className="vimeo-iframe-container">
        <iframe
          className="vimeo-iframe"
          title="raghda"
          src="https://player.vimeo.com/video/467148969?loop=1&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const CaseSpecificCabonline = () => {
  return (
    <div className="case-video-container">
      <div className="vimeo-iframe-container">
        <iframe
          className="vimeo-iframe"
          title="jip-got"
          src="https://player.vimeo.com/video/467150254?loop=1&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div className="vimeo-iframe-container">
        <iframe
          className="vimeo-iframe"
          title="jip-crush"
          src="https://player.vimeo.com/video/467148708?loop=1&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const CaseSpecificVasaloppet = () => {
  return (
    <div className="case-vasaloppet">
      <AnimatedGallery parentCaseURL="vasaloppet" />
      <div className="case-p">
        <p>
          Som Vasaloppsdeltagare sökte man (elastiskt) med sitt för- och
          efternamn, och fick sen njuta av att se vilka bedrifter man (enligt
          våra algoritmer) uppnått under sina olika race och år. Vi ville visa
          att alla åkare har massa roliga insikter dolda i resultatdatan. Högt
          och lågt. Lättsamt och på allvar. Smidigt paketerat i en webbapp.
        </p>
        <p>
          Till exempel kunde vi bedömma hur väl man disponerade sitt race
          gentemot toppåkare, hur stark man var i upp- och nedförsbackar, hur
          man står sig mot Gunde Svan, eller ifall man lyckades få till en
          imponerande spört i mål. I referens mot alla åkare, klubb, kändisar
          eller din familj. <Emoji symbol="⛷📈" label="medals" />
        </p>
      </div>
      <div className="case-image">
        <img
          className="case-image-img"
          key="vasaloppet"
          alt="img"
          src={require('../../assets/vasaloppet-thumbnail-project.jpg')}
        />
      </div>
      <div className="case-p">
        <p>
          Vi ville att appen (klienten) skulle vara lätt, snabb och säker. Så
          alla algoritmer, beräkningar och lagring av personuppgifter
          levererades via endpoints på vår NodeJS-backend.
        </p>
        <p>
          En prioritering genom projektet var tillgodose alla Vasaloppets
          deltagare och ta fram tillräckligt med medaljer för att säkerställa
          att alla får något som passar just deras nivå och mål. Vi landade på
          totalt 14 olika medaljtyper med tre nivåer vardera – brons, silver och
          guld <Emoji symbol="🥉🥈🥇" label="medals" />
        </p>
      </div>
      <div className="case-image">
        <img
          className="case-image-img"
          key="vasaloppet"
          alt="img"
          src={require('../../assets/vasaloppet-techstack.jpg')}
        />
      </div>
      <p>
        Under huven (NodeJS) beräknades medaljerna fram med hjälp av relativa
        jämförelser, olika kurvanpassningningar och klustring av racedatan. På
        någon sekund genomfördes tusentals beräkningar vars resultat sedan
        levererades till klienten. <Emoji symbol="☁️📲" label="cloud" />
      </p>
    </div>
  );
};

const CaseSpecificMetro = () => {
  return (
    <div className="case-image">
      <img
        className="case-image-img"
        key="metrolive1"
        alt="img"
        src={require('../../assets/metrolive-img1.jpg')}
      />
      <img
        className="case-image-img"
        key="metrolive2"
        alt="img"
        src={require('../../assets/metrolive-img2.jpg')}
      />
      <img
        className="case-image-img"
        key="metrolive3"
        alt="img"
        src={require('../../assets/metrolive-img3.jpg')}
      />
    </div>
  );
};

const CaseSpecificVEX = () => {
  return (
    <div className="case-image">
      <p>
        <strong>
          Mer info{' '}
          <u>
            <a
              href="https://etablera.co/vex-challenge-the-norm"
              target="_blank"
              rel="noopener noreferrer"
            >
              här
            </a>
          </u>
        </strong>
        <br />
        (bläddra med piltangenterna)
      </p>
    </div>
  );
};

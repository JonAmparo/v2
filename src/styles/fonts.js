import { css } from 'styled-components';

import CalibreLightTTF from '../fonts/Calibre/Calibre-Light.ttf';
import CalibreLightWOFF from '../fonts/Calibre/Calibre-Light.woff';
import CalibreLightWOFF2 from '../fonts/Calibre/Calibre-Light.woff2';
import CalibreLightItalicTTF from '../fonts/Calibre/Calibre-LightItalic.ttf';
import CalibreLightItalicWOFF from '../fonts/Calibre/Calibre-LightItalic.woff';
import CalibreLightItalicWOFF2 from '../fonts/Calibre/Calibre-LightItalic.woff2';
import CalibreRegularTTF from '../fonts/Calibre/Calibre-Regular.ttf';
import CalibreRegularWOFF from '../fonts/Calibre/Calibre-Regular.woff';
import CalibreRegularWOFF2 from '../fonts/Calibre/Calibre-Regular.woff2';
import CalibreRegularItalicTTF from '../fonts/Calibre/Calibre-RegularItalic.ttf';
import CalibreRegularItalicWOFF from '../fonts/Calibre/Calibre-RegularItalic.woff';
import CalibreRegularItalicWOFF2 from '../fonts/Calibre/Calibre-RegularItalic.woff2';
import CalibreMediumTTF from '../fonts/Calibre/Calibre-Medium.ttf';
import CalibreMediumWOFF from '../fonts/Calibre/Calibre-Medium.woff';
import CalibreMediumWOFF2 from '../fonts/Calibre/Calibre-Medium.woff2';
import CalibreMediumItalicTTF from '../fonts/Calibre/Calibre-MediumItalic.ttf';
import CalibreMediumItalicWOFF from '../fonts/Calibre/Calibre-MediumItalic.woff';
import CalibreMediumItalicWOFF2 from '../fonts/Calibre/Calibre-MediumItalic.woff2';
import CalibreSemiboldTTF from '../fonts/Calibre/Calibre-Semibold.ttf';
import CalibreSemiboldWOFF from '../fonts/Calibre/Calibre-Semibold.woff';
import CalibreSemiboldWOFF2 from '../fonts/Calibre/Calibre-Semibold.woff2';
import CalibreSemiboldItalicTTF from '../fonts/Calibre/Calibre-SemiboldItalic.ttf';
import CalibreSemiboldItalicWOFF from '../fonts/Calibre/Calibre-SemiboldItalic.woff';
import CalibreSemiboldItalicWOFF2 from '../fonts/Calibre/Calibre-SemiboldItalic.woff2';

import GothamXNarrowBookEOT from '../fonts/GothamXNarrow/GothamXNarrow-Book.eot';
import GothamXNarrowBookWOFF2 from '../fonts/GothamXNarrow/GothamXNarrow-Book.woff2';
import GothamXNarrowBookWOFF from '../fonts/GothamXNarrow/GothamXNarrow-Book.woff';
import GothamXNarrowBookTTF from '../fonts/GothamXNarrow/GothamXNarrow-Book.ttf';
import GothamXNarrowBookItalicEOT from '../fonts/GothamXNarrow/GothamXNarrow-BookItalic.eot';
import GothamXNarrowBookItalicWOFF2 from '../fonts/GothamXNarrow/GothamXNarrow-BookItalic.woff2';
import GothamXNarrowBookItalicWOFF from '../fonts/GothamXNarrow/GothamXNarrow-BookItalic.woff';
import GothamXNarrowBookItalicTTF from '../fonts/GothamXNarrow/GothamXNarrow-BookItalic.ttf';
import GothamXNarrowMediumEOT from '../fonts/GothamXNarrow/GothamXNarrow-Medium.eot';
import GothamXNarrowMediumWOFF2 from '../fonts/GothamXNarrow/GothamXNarrow-Medium.woff2';
import GothamXNarrowMediumWOFF from '../fonts/GothamXNarrow/GothamXNarrow-Medium.woff';
import GothamXNarrowMediumTTF from '../fonts/GothamXNarrow/GothamXNarrow-Medium.ttf';
import GothamXNarrowMediumItalicEOT from '../fonts/GothamXNarrow/GothamXNarrow-MediumItalic.eot';
import GothamXNarrowMediumItalicWOFF2 from '../fonts/GothamXNarrow/GothamXNarrow-MediumItalic.woff2';
import GothamXNarrowMediumItalicWOFF from '../fonts/GothamXNarrow/GothamXNarrow-MediumItalic.woff';
import GothamXNarrowMediumItalicTTF from '../fonts/GothamXNarrow/GothamXNarrow-MediumItalic.ttf';
import GothamXNarrowBoldEOT from '../fonts/GothamXNarrow/GothamXNarrow-Bold.eot';
import GothamXNarrowBoldWOFF2 from '../fonts/GothamXNarrow/GothamXNarrow-Bold.woff2';
import GothamXNarrowBoldWOFF from '../fonts/GothamXNarrow/GothamXNarrow-Bold.woff';
import GothamXNarrowBoldTTF from '../fonts/GothamXNarrow/GothamXNarrow-Bold.ttf';
import GothamXNarrowBoldItalicEOT from '../fonts/GothamXNarrow/GothamXNarrow-BoldItalic.eot';
import GothamXNarrowBoldItalicWOFF2 from '../fonts/GothamXNarrow/GothamXNarrow-BoldItalic.woff2';
import GothamXNarrowBoldItalicWOFF from '../fonts/GothamXNarrow/GothamXNarrow-BoldItalic.woff';
import GothamXNarrowBoldItalicTTF from '../fonts/GothamXNarrow/GothamXNarrow-BoldItalic.ttf';

const FontFaces = css`
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightWOFF2}) format('woff2'),
      url(${CalibreLightWOFF}) format('woff'),
      url(${CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightItalicWOFF2}) format('woff2'),
      url(${CalibreLightItalicWOFF}) format('woff'),
      url(${CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularWOFF2}) format('woff2'),
      url(${CalibreRegularWOFF}) format('woff'),
      url(${CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularItalicWOFF2}) format('woff2'),
      url(${CalibreRegularItalicWOFF}) format('woff'),
      url(${CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumWOFF2}) format('woff2'),
      url(${CalibreMediumWOFF}) format('woff'),
      url(${CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumItalicWOFF2}) format('woff2'),
      url(${CalibreMediumItalicWOFF}) format('woff'),
      url(${CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldWOFF2}) format('woff2'),
      url(${CalibreSemiboldWOFF}) format('woff'),
      url(${CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldItalicWOFF2}) format('woff2'),
      url(${CalibreSemiboldItalicWOFF}) format('woff'),
      url(${CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham XNarrow';
    src: url(${GothamXNarrowBookEOT}) format('embedded-opentype'),
      url(${GothamXNarrowBookWOFF2}) format('woff2'),
      url(${GothamXNarrowBookWOFF}) format('woff'),
      url(${GothamXNarrowBookTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham XNarrow';
    src: url(${GothamXNarrowBookItalicEOT}) format('embedded-opentype'),
      url(${GothamXNarrowBookItalicWOFF2}) format('woff2'),
      url(${GothamXNarrowBookItalicWOFF}) format('woff'),
      url(${GothamXNarrowBookItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham XNarrow';
    src: url(${GothamXNarrowMediumEOT}) format('embedded-opentype'),
      url(${GothamXNarrowMediumWOFF2}) format('woff2'),
      url(${GothamXNarrowMediumWOFF}) format('woff'),
      url(${GothamXNarrowMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham XNarrow';
    src: url(${GothamXNarrowMediumItalicEOT}) format('embedded-opentype'),
      url(${GothamXNarrowMediumItalicWOFF2}) format('woff2'),
      url(${GothamXNarrowMediumItalicWOFF}) format('woff'),
      url(${GothamXNarrowMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham XNarrow';
    src: url(${GothamXNarrowBoldEOT}) format('embedded-opentype'),
      url(${GothamXNarrowBoldWOFF2}) format('woff2'),
      url(${GothamXNarrowBoldWOFF}) format('woff'),
      url(${GothamXNarrowBoldTTF}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham XNarrow';
    src: url(${GothamXNarrowBoldItalicEOT}) format('embedded-opentype'),
      url(${GothamXNarrowBoldItalicWOFF2}) format('woff2'),
      url(${GothamXNarrowBoldItalicWOFF}) format('woff'),
      url(${GothamXNarrowBoldItalicTTF}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
`;

export default FontFaces;

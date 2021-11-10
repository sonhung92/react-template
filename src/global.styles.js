import { createGlobalStyle } from 'styled-components';
import { themeProvider } from 'provider/theme';
import RoboToMediumEot from 'assets/fonts/Roboto-Medium.eot';
import RoboToMediumWoff2 from 'assets/fonts/Roboto-Medium.woff2';
import RoboToMediumTtf from 'assets/fonts/Roboto-Medium.ttf';
import RoboToMediumSvg from 'assets/fonts/Roboto-Medium.svg';

import RoboToRegularEot from 'assets/fonts/Roboto-Regular.eot';
import RoboToRegularWoff2 from 'assets/fonts/Roboto-Regular.woff2';
import RoboToRegularTtf from 'assets/fonts/Roboto-Regular.ttf';
import RoboToRegularSvg from 'assets/fonts/Roboto-Regular.svg';

import RoboToBoldEot from 'assets/fonts/Roboto-Bold.eot';
import RoboToBoldWoff2 from 'assets/fonts/Roboto-Bold.woff2';
import RoboToBoldTtf from 'assets/fonts/Roboto-Bold.ttf';
import RoboToBoldSvg from 'assets/fonts/Roboto-Bold.svg';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Medium';
    font-display: swap;
    src: url(${RoboToMediumEot});
    src: local('@'), url(${RoboToMediumWoff2}) format('woff2'),
      url(${RoboToMediumTtf}) format('truetype'),
      url(${RoboToMediumSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Regular';
    font-display: swap;
    src: url(${RoboToRegularEot});
    src: local('@'), url(${RoboToRegularWoff2}) format('woff2'),
      url(${RoboToRegularTtf}) format('truetype'),
      url(${RoboToRegularSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Bold';
    font-display: swap;
    src: url(${RoboToBoldEot});
    src: local('@'), url(${RoboToBoldWoff2}) format('woff2'),
      url(${RoboToBoldTtf}) format('truetype'),
      url(${RoboToBoldSvg}) format('svg');
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${themeProvider.fontFamilyBase};
    font-size: ${themeProvider.fontSizeBase}
  };

  .bgcolor-default {
    background-color: #263544;
  };

  .bgcolor-white {
    background-color: #fff;
  };

  .height-default {
    height: 75px;
  };

  .pd-nav {
    padding: 20px 10px;
  };

  .cl-white {
    color: #fff;
  };

  button, div {
    :focus {
      outline: 0;
    }
  }

  .m-0 {
    margin: 0;
  }

  .ml-5 {
    margin-left: 5px;
  }

  .ml-20 {
    margin-left: 20px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mr-0 {
    margin-right: 0;
  }

  .mr-20 {
    margin-right: 20px;
  }

  /* End margin */
  .overflow-hidden {
    overflow: hidden;
  }

  .text-center {
    text-align: center;
  }

  .pointer {
    cursor: pointer;
  }

  .d-inline-block {
    display: inline-block;
  }

  .color-white {
    color: white;
  }

  .font-bold {
    font-weight: bold;
  }

  .d-flex {
    display: flex;
  }

  .justify-content-between {
    justify-content: space-between
  }

  .w-100-per {
    width: 100%;
  }
`;

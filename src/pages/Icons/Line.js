import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const icons = [
  'lni-pagination',
  'lni-paint-bucket',
  'lni-paint-roller',
  'lni-pallet',
  'lni-paperclip',
  'lni-more',
  'lni-pause',
  'lni-paypal-original',
  'lni-microsoft',
  'lni-money-protection',
  'lni-pencil',
  'lni-paypal',
  'lni-pencil-alt',
  'lni-patreon',
  'lni-phone-set',
  'lni-phone',
  'lni-pin',
  'lni-pinterest',
  'lni-pie-chart',
  'lni-pilcrow',
  'lni-plane',
  'lni-play',
  'lni-plug',
  'lni-plus',
  'lni-pointer-down',
  'lni-pointer-left',
  'lni-pointer-right',
  'lni-pointer-up',
  'lni-play-store',
  'lni-pizza',
  'lni-postcard',
  'lni-pound',
  'lni-power-switch',
  'lni-printer',
  'lni-producthunt',
  'lni-protection',
  'lni-pulse',
  'lni-pyramids',
  'lni-python',
  'lni-pointer',
  'lni-popup',
  'lni-quotation',
  'lni-radio-button',
  'lni-rain',
  'lni-quora',
  'lni-react',
  'lni-question-circle',
  'lni-php',
  'lni-reddit',
  'lni-reload',
  'lni-restaurant',
  'lni-road',
  'lni-rocket',
  'lni-rss-feed',
  'lni-ruler-alt',
  'lni-ruler-pencil',
  'lni-ruler',
  'lni-rupee',
  'lni-save',
  'lni-school-bench-alt',
  'lni-school-bench',
  'lni-scooter',
  'lni-scroll-down',
  'lni-search-alt',
  'lni-search',
  'lni-select',
  'lni-seo',
  'lni-service',
  'lni-share-alt',
  'lni-share',
  'lni-shield',
  'lni-shift-left',
  'lni-shift-right',
  'lni-ship',
  'lni-shopify',
  'lni-shopping-basket',
  'lni-shortcode',
  'lni-shovel',
  'lni-shuffle',
  'lni-signal',
  'lni-sketch',
  'lni-skipping-rope',
  'lni-skype',
  'lni-slack',
  'lni-slice',
  'lni-slideshare',
  'lni-slim',
  'lni-reply',
  'lni-sort-alpha-asc',
  'lni-remove-file',
  'lni-sort-amount-dsc',
  'lni-sort-amount-asc',
  'lni-soundcloud',
  'lni-souncloud-original',
  'lni-spiner-solid',
  'lni-revenue',
  'lni-spinner',
  'lni-spellcheck',
  'lni-spotify',
  'lni-spray',
  'lni-sprout',
  'lni-snapchat',
  'lni-stamp',
  'lni-star-empty',
  'lni-star-filled',
  'lni-star-half',
  'lni-star',
  'lni-stats-down',
  'lni-spinner-arrow',
  'lni-steam',
  'lni-stackoverflow',
  'lni-stop',
  'lni-strikethrough',
  'lni-sthethoscope',
  'lni-stumbleupon',
  'lni-sun',
  'lni-support',
  'lni-surf-board',
  'lni-swift',
  'lni-syringe',
  'lni-tab',
  'lni-tag',
  'lni-target-customer',
  'lni-target-revenue',
  'lni-target',
  'lni-taxi',
  'lni-stats-up',
  'lni-telegram-original',
  'lni-telegram',
  'lni-text-align-center',
  'lni-text-align-justify',
  'lni-text-align-left',
];

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Line = () => {
  return (
    <>
      {icons.map((icon) => (
        <Grid.Column key={icon}>
          <Container className="icon-container">
            <i className={`lni ${icon}`} />
            <span className="icon-name ml-20">{icon}</span>
          </Container>
        </Grid.Column>
      ))}
    </>
  );
};

Line.propTypes = {};
Line.defaultProps = {};

export default Line;

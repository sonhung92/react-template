import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const icons = [
  'ti-arrow-up',
  'ti-arrow-right',
  'ti-arrow-left',
  'ti-arrow-down',
  'ti-arrows-vertical',
  'ti-arrows-horizontal',
  'ti-angle-up',
  'ti-angle-right',
  'ti-angle-left',
  'ti-angle-down',
  'ti-angle-double-up',
  'ti-angle-double-right',
  'ti-angle-double-left',
  'ti-angle-double-down',
  'ti-move',
  'ti-mobile',
  'ti-email',
  'ti-star',
  'ti-spray',
  'ti-signal',
  'ti-shopping-cart',
  'ti-shopping-cart-full',
  'ti-settings',
  'ti-search',
  'ti-zoom-in',
  'ti-zoom-out',
  'ti-cut',
  'ti-control-forward',
  'ti-control-backward',
  'ti-volume',
  'ti-control-skip-forward',
  'ti-control-skip-backward',
  'ti-control-record',
  'ti-control-eject',
  'ti-paragraph',
  'ti-uppercase',
  'ti-underline',
  'ti-text',
  'ti-Italic',
  'ti-smallcap',
  'ti-list',
  'ti-list-ol',
  'ti-align-right',
  'ti-align-left',
  'ti-align-justify',
  'ti-align-center',
  'ti-quote-right',
  'ti-quote-left',
  'ti-layout-width-full',
  'ti-layout-width-default',
  'ti-layout-width-default-alt',
  'ti-layout-tab',
  'ti-layout-tab-window',
  'ti-layout-tab-v',
  'ti-layout-tab-min',
  'ti-layout-slider',
  'ti-layout-slider-alt',
  'ti-layout-sidebar-right',
  'ti-layout-sidebar-none',
  'ti-layout-sidebar-left',
  'ti-layout-placeholder',
  'ti-layout-menu',
  'ti-layout-menu-v',
  'ti-layout-menu-separated',
  'ti-layout-menu-full',
  'ti-layout-media-right',
  'ti-layout-media-right-alt',
  'ti-layout-media-overlay',
  'ti-layout-media-overlay-alt',
  'ti-layout-media-overlay-alt-2',
  'ti-layout-media-left',
  'ti-layout-media-left-alt',
  'ti-layout-media-center',
  'ti-layout-media-center-alt',
  'ti-layout-list-thumb',
  'ti-layout-list-thumb-alt',
  'ti-layout-list-post',
  'ti-layout-list-large-image',
  'ti-layout-line-solid',
  'ti-layout-grid4',
  'ti-layout-grid3',
  'ti-layout-grid2',
  'ti-layout-grid2-thumb',
  'ti-layout-cta-right',
  'ti-layout-cta-left',
  'ti-layout-cta-center',
  'ti-layout-cta-btn-right',
  'ti-layout-cta-btn-left',
  'ti-layout-column4',
  'ti-layout-column3',
  'ti-layout-column2',
  'ti-layout-accordion-separated',
  'ti-layout-accordion-merged',
  'ti-layout-accordion-list',
  'ti-widgetized',
  'ti-widget',
  'ti-widget-alt',
  'ti-view-list',
  'ti-view-list-alt',
  'ti-view-grid',
  'ti-upload',
  'ti-download',
  'ti-loop',
  'ti-layout-sidebar-2',
  'ti-layout-grid4-alt',
  'ti-layout-grid3-alt',
  'ti-layout-grid2-alt',
  'ti-layout-column4-alt',
  'ti-layout-column3-alt',
  'ti-layout-column2-alt',
];

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Themify = () => {
  return (
    <>
      {icons.map((icon) => (
        <Grid.Column key={icon}>
          <Container className="icon-container">
            <span className={icon} />
            <span className="icon-name ml-20">{icon}</span>
          </Container>
        </Grid.Column>
      ))}
    </>
  );
};

Themify.propTypes = {};
Themify.defaultProps = {};

export default Themify;

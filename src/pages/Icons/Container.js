import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import Line from './Line';
import FontAwesome from './FontAwesome';
import Themify from './Themify';

const Container = ({ currentFont }) => {
  const renderView = useMemo(() => {
    switch (currentFont) {
      case 'line':
        return <Line />;
      case 'themify':
        return <Themify />;
      default:
        return <FontAwesome />;
    }
  }, [currentFont]);

  return (
    <Grid columns={4} padded>
      {renderView}
    </Grid>
  );
};

Container.propTypes = {
  currentFont: PropTypes.string.isRequired,
};

export default Container;

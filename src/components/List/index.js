import React from 'react';
import { AutoSizer, List, CellMeasurerCache } from 'react-virtualized';
import PropTypes from 'prop-types';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 70,
});

const Mylist = ({ data, renderRow }) => {
  return (
    <AutoSizer>
      {({ width }) => (
        <List
          width={width}
          height={200}
          rowHeight={cache.rowHeight}
          rowRenderer={renderRow}
          rowCount={data.length}
          overscanRowCount={3}
        />
      )}
    </AutoSizer>
  );
};

Mylist.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderRow: PropTypes.func.isRequired,
};

Mylist.defaultProps = {};

export default Mylist;

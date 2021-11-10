import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';
import { TIME_FORMAT } from 'common/constants/time';
import CustomInput from './CustomInput';

registerLocale('enUS', enUS);
const ref = createRef();

const Calendar = ({ locale, onChange, date, minDate, maxDate, showTimeSelect }) => (
  <DatePicker
    locale={locale}
    selected={date}
    minDate={minDate}
    maxDate={maxDate}
    highlightDates={[new Date()]}
    onChange={onChange}
    showTimeSelect={showTimeSelect}
    dateFormat={TIME_FORMAT.DT}
    customInput={<CustomInput ref={ref} />}
  />
);

Calendar.propTypes = {
  onChange: PropTypes.func.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  locale: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  showTimeSelect: PropTypes.bool,
};

Calendar.defaultProps = {
  locale: 'enUS',
  minDate: new Date(),
  maxDate: null,
  showTimeSelect: false,
};

export default Calendar;

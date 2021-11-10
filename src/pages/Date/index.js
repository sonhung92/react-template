import React, { useState, memo } from 'react';
import {
  utc,
  endOfDay,
  startOfDay,
  dateFormat,
  utcToLocalTime,
  dateFormatByCountry,
  addDays,
  subDays,
  diffInDays,
  localTime,
} from 'common/utils';
import { useTranslation } from 'react-i18next';
import Calendar from 'components/Calendar';
import { areEqualLocationKey } from 'common/hooks';
import { Inline } from './style';

const DateFns = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState('');
  const renderView = (label, value) => {
    return (
      <Inline>
        <p>
          <span className="font-bold">{label}</span>: {value}
        </p>
      </Inline>
    );
  };
  return (
    <>
      <Calendar date={date} onChange={(value) => setDate(value)} />
      {renderView('UTC', utc(localTime(date)))}
      {renderView(t('date.startOfDate'), startOfDay(date))}
      {renderView(t('date.endOfDate'), endOfDay(date))}
      {renderView(t('date.clientTime'), utcToLocalTime(utc(localTime(date))))}
      {renderView(t('date.dateFormatByCountry'), dateFormatByCountry(localTime(date), 'EN'))}
      {renderView(t('date.dateTimeFormat'), dateFormat(date, 'd-MMM-yy'))}
      {renderView(t('date.addTwoDays'), addDays(localTime(date), 2))}
      {renderView(t('date.subTwoDay'), subDays(localTime(date), 2))}
      {renderView(t('date.diffNow'), diffInDays(date, new Date()))}
    </>
  );
};

DateFns.propTypes = {};
DateFns.defaultProps = {};

export default memo(DateFns, areEqualLocationKey);

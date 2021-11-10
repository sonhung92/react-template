import { TIME_FORMAT } from 'common/constants/time';
import {
  format,
  startOfDay as SOD,
  endOfDay as EOD,
  addDays as addDaysFnc,
  subDays as subDaysFnc,
  differenceInDays,
} from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

const localTimeZoneString = new window.Intl.DateTimeFormat().resolvedOptions().timeZone; // e.g. Asia/Bangkok

export const dateFormatByCountry = (date, country) => {
  if (!date) {
    return '';
  }
  return format(date, TIME_FORMAT[country] || TIME_FORMAT.EN);
};

export const timeStampSToMs = (value) => value * 1000;

export const dateFormat = (date, customFormat = TIME_FORMAT.BASE) => {
  if (!date) {
    return '';
  }
  return format(date, customFormat);
};

export const utc = (date) => {
  if (!date) {
    return '';
  }
  const utcDate = zonedTimeToUtc(new Date(date), localTimeZoneString);
  return utcDate.toISOString();
};

export const startOfDay = (date) => {
  if (!date) {
    return '';
  }
  const result = SOD(new Date(date));
  return utc(result);
};

export const endOfDay = (date) => {
  if (!date) {
    return '';
  }
  const result = EOD(new Date(date));
  return utc(result);
};

export const utcToLocalTime = (utcDate, customFormat = TIME_FORMAT.BASE) => {
  if (!utcDate) {
    return '';
  }
  const date = new Date(utcDate);
  const zonedDate = utcToZonedTime(date, localTimeZoneString);
  return format(zonedDate, customFormat);
};

export const addDays = (date, amount) => {
  if (!date) {
    return '';
  }
  const result = addDaysFnc(new Date(date), amount);
  return utc(result);
};

export const subDays = (date, amount) => {
  if (!date) {
    return '';
  }
  const result = subDaysFnc(new Date(date), amount);
  return utc(result);
};

export const diffInDays = (laterDate, earlierDate) => {
  if (!laterDate || !earlierDate) {
    return '';
  }
  const startLaterDate = startOfDay(laterDate);
  const startEarlierDate = startOfDay(earlierDate);
  const result = differenceInDays(new Date(startLaterDate), new Date(startEarlierDate));
  return result;
};

export const localTime = (date) => {
  if (!date) {
    return '';
  }
  const clientDate = new Date();
  const hours = clientDate.getHours();
  const minutes = clientDate.getMinutes();
  const seconds = clientDate.getSeconds();
  const shadowDate = new Date(date);
  shadowDate.setHours(hours);
  shadowDate.setMinutes(minutes);
  shadowDate.setSeconds(seconds);
  return shadowDate;
};

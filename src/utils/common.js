import moment from 'moment';

export const formatTime = (value) => {
  return moment(value).format(`hh:mm A`);
};

export const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

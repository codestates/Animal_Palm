import moment from 'moment';
export const getParsedDate = (createdAt) => {
  return moment(createdAt).format('YY-MM-DD HH:MM');
}
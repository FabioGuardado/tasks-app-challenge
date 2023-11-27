import moment from 'moment';

const formatInputDate = (date: string) => {
  if (moment(date).format('yyyy-MM-DD') === date) {
    const currentDate = new Date(date || '');
    const dateForInputField = moment(currentDate)
      .add(1, 'days')
      .format('yyyy-MM-DD');

    return dateForInputField;
  }

  return moment(date).add(1, 'days').format('yyyy-MM-DD');
};

export default formatInputDate;

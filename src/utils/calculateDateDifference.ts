const calculateDateDifference = (date: string) => {
  const dateToEvaluate = new Date(date);
  const today = new Date();

  const differenceInTime = today.getTime() - dateToEvaluate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  if (differenceInDays <= -2) {
    return 'on-time';
  }
  if (differenceInDays > -2 && differenceInDays <= 0) {
    return 'almost-late';
  }
  return 'late';
};

export default calculateDateDifference;

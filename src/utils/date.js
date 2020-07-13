import moment from 'moment';

function formatDate(date) {
  const now = new Date();
  const target = new Date(date);

  if (now.getFullYear() == target.getFullYear()
    && now.getMonth() === target.getMonth()
    && now.getDay() === target.getDay()) {
    return `${("0" + target.getHours()).slice(-2)}:${("0" + target.getMinutes()).slice(-2)}`; // ex. 16:40
  }
  else {
    const year = target.getYear() % 100;
    const month = ("0" + (target.getMonth() + 1)).slice(-2);
    const date = ("0" + (target.getDate())).slice(-2);
    return `${year}-${month}-${date}`; // ex. 20-07-31
  }
}

function diffDate(end, start) {
  if (start === undefined) {

  } else {

  }
}

export default formatDate;
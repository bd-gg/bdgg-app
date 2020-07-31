import moment from 'moment';

function formatDate(date) {
  const now = new Date();
  const target = new Date(date);

  if (
    now.getFullYear() == target.getFullYear() &&
    now.getMonth() === target.getMonth() &&
    now.getDate() === target.getDate()
  ) {
    return `${('0' + target.getHours()).slice(-2)}:${(
      '0' + target.getMinutes()
    ).slice(-2)}`; // ex. 16:40
  } else {
    const year = target.getYear() % 100;
    const month = ('0' + (target.getMonth() + 1)).slice(-2);
    const date = ('0' + target.getDate()).slice(-2);
    return `${year}-${month}-${date}`; // ex. 20-07-31
  }
}

function describeDate(date) {
  const now = new Date();
  const past = new Date(date);

  const dy = now.getFullYear() - past.getFullYear();
  if (dy > 0) return `${dy}년 전`;

  const dm = now.getMonth() - past.getMonth();
  if (dm > 0) return `${dm}달 전`;

  const dd = now.getDate() - past.getDate();
  if (dd > 0) return `${dd}일 전`;

  return `오늘`;
}

export { formatDate, describeDate };

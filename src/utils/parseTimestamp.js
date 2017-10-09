export const parseTimestamp = (timestamp) => {
	return `${getDate(timestamp)} ${getTime(timestamp)}`
}

const getDate = (timestamp) => {
	const date = new Date(timestamp);
	const day = ("0" + date.getDate()).slice(-2);
	const month = ("0" + (date.getMonth() + 1)).slice(-2)
	const year = date.getFullYear();
	const today = new Date();
  const yesterday = new Date(Date.now() - 86400000);
  if (date.setHours(0,0,0,0) === today.setHours(0,0,0,0))
    return 'today, ';
  else if (date.setHours(0,0,0,0) === yesterday.setHours(0,0,0,0))
    return 'yesterday, ';
  else if (year === today.getFullYear())
    return `${day} ${month}`;
  else
    return `${day}.${month}.${year}`;
}

const getTime = (timestamp) => {
	const date = new Date(timestamp);
	const hours = ("0" + date.getHours()).slice(-2);
	const min = ("0" + date.getMinutes()).slice(-2);
	return `${hours}:${min}`
}

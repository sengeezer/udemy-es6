function addCalEntry(event, date, len, timeout) {
  // long form
  date = typeof date === 'undefined' ? new Date().getTime() : date;
  len = typeof len === 'undefined' ? 60 : len;
  timeout = typeof timeout === 'undefined' ? 1000 : timeout;

  console.log(event, date, len, timeout);
}

addCalEntry('meeting');

function addCallEntry(event, date, len, timeout) {
  // short form
  date = date || new Date().getTime();
  len = len || 60;
  timeout = timeout || 1000;

  console.log(event, date, len, timeout);
}

addCallEntry('meeting');

function addCalEntry(event, date = new Date().getTime(), len = 60, timeout = 1000) {
  console.log(event, date, len, timeout);
}

addCalEntry('meeting');

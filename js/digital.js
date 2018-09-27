function convertToZone(time, zone) {
  let prevtime = time;
  let newzone = zone;

  if((prevtime + newzone < 0)) {
    return (24 + (newzone+prevtime));
  }
  else {
    return prevtime+newzone;
  }
  
}

function zeroCheck(numberval) {
  let number = numberval;
  if(number < 10) {
      number = '0' + number;
  }
  return number;
}

function getClocks() {
  let now = new Date();

  let localh = now.getHours();
  let localm = now.getMinutes();
  let locals = now.getSeconds();

  let nyh = convertToZone(localh, -6);


  localh = zeroCheck(localh);
  localm = zeroCheck(localm);
  locals = zeroCheck(locals);
  nyh = zeroCheck(nyh);

  document.getElementById('clock1').innerHTML = `${localh}:${localm}:${locals}`;
  document.getElementById('clock2').innerHTML = `${nyh}:${localm}:${locals}`;

  setTimeout(getClocks, 500);
}

getClocks();
let startTime = new Date();                                                         // New Date(), initial time

let startPosSec = startTime.getSeconds();                                           // Start position seconds hand
let startPosMin = (startTime.getMinutes() * 60) + startPosSec;                      // Start position minute hand
let startPosHour = ((startTime.getHours()%12) * 3600) + startPosMin;                // Start postion hour hand

function checkDifference(date1, date2) {                                            // checks the difference between start time and now
    return Math.floor(Math.abs(date2.getTime() - date1.getTime()) / 1000);
}

function refreshClock() {                                                           // refreshes the clock
  let now = new Date();                         
  let difference = checkDifference(startTime, now);  

  let degreeS = (startPosSec + difference) / 60 * 360;                              // Calculate the position of the hands
  let degreeM = (startPosMin + difference) / 3600 * 360;
  let degreeH = (startPosHour + difference) / 43200 * 360;

  document.getElementById('hour').style.transform = `rotate(${degreeH}deg)`;        // Apply transformation to hands
  document.getElementById('minute').style.transform = `rotate(${degreeM}deg)`;
  document.getElementById('second').style.transform = `rotate(${degreeS}deg)`;

  now.getHours() < 12 ? document.getElementById('noon').innerHTML = 'AM' : document.getElementById('noon').innerHTML = 'PM';

  setTimeout(refreshClock, 1000);                                                   // Redo this function every second
}


refreshClock();
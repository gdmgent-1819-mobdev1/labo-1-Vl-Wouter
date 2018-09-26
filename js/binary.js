// zeroCheck: checks if value is lower than 10 and adds a 0 if it's true
function zeroCheck(numberval) {
    let number = numberval;
    if(number < 10) {
        number = '0' + number;
    }
    return number;
}

// convert() : converts time value to binary
function convert(num) {
    let bin = "";
    let conv = [];
    
    while(num > 0) {
        bin = num%2 + bin;
        num = Math.floor(num/2);
    }

    conv = bin.split('');
    while(conv.length < 6) {
        conv.unshift("0");
    }
    return conv;
}


// Create function getTime()
function getTimes() {
    // Create Date Object
    let today = new Date();
    // Get hours
    let hours = today.getHours();
    // Get minutes
    let minutes = today.getMinutes();
    // Get seconds
    let seconds = today.getSeconds();

    //convert values for binary part
    let binhour = convert(hours);
    let binmin = convert(minutes);
    let binsec = convert(seconds);


    // turn on correct hour dots
    let hourdots = document.getElementById('hours').getElementsByClassName('dot');
    for(let i = 0; i < hourdots.length; i++) {
        binhour[i] == 1 ? hourdots[i].classList.add('on') : hourdots[i].classList.remove('on');
    }

    // turn on minute dots
    let minutedots = document.getElementById('minutes').getElementsByClassName('dot');
    for(let i = 0; i < minutedots.length; i++) {
        binmin[i] == 1 ? minutedots[i].classList.add('on') : minutedots[i].classList.remove('on');
    }

    //turn on seconds dots
    let seconddots = document.getElementById('seconds').getElementsByClassName('dot');
    for(let i = 0; i < seconddots.length; i++) {
        binsec[i] == 1 ? seconddots[i].classList.add('on') : seconddots[i].classList.remove('on');
    }

    // if any time is lower than 10, add a 0
    hours = zeroCheck(hours);
    minutes = zeroCheck(minutes);
    seconds = zeroCheck(seconds);
    //create string for top clock
    let timeString = `${hours}:${minutes}:${seconds}`;
    // put string in top clock
    document.getElementById('clock').innerHTML = timeString;

    // Enable correct dots for the hour
    

    // Repeat function every 500ms
    setTimeout(getTimes, 500);

}

getTimes();

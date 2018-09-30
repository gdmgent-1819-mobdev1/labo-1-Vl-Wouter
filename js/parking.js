function getSpots() {
  return localStorage.getItem('parkingSpot').split(',');

}

function getData() {
  fetch('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json').then(function(response) {
    response.json().then(function(data) {
      let oldspots = [];
      let newspots = [];
      if(localStorage.getItem('parkingSpot') != null) {
        oldspots = getSpots();
      }
      document.body.innerHTML = '';
      for(let i = 0; i < data.length; i++) {
        let firstday = data[i].openingTimes[0].days[0];
        let last = data[i].openingTimes[0].days.length;
        let lastday = data[i].openingTimes[0].days[last-1];

        let total = data[i].parkingStatus.totalCapacity;
        let available = data[i].parkingStatus.availableCapacity;
        let col = '';

        if(localStorage.getItem('parkingSpots') != null) {
          if(oldspots[i] < data[i].parkingStatus.availableCapacity) {
              icon = `<i class='fas fa-arrow-up'></i>`;
          }
          else if(oldspots[i] > data[i].parkingStatus.availableCapacity) {
              icon = `<i class='fas fa-arrow-down'></i>`;
          }
          else {
              icon = `<i class='fas fa-equals'></i>`;
          }
        }

        if((available/total) < 0.2) {
          col = 'red';  
        }
        else if((available/total) <= 0.5) {
          col = 'orange';
        }
        else {
          col = 'green';
        }
        
        document.body.innerHTML+= `
        <div class='card ${col}'>
          <div class='card-title'>
            <h1>${data[i].name}</h1>
            <p>${data[i].address}</p>
          </div>
          <div class='card-data'>
            <p>Open van ${firstday} tot ${lastday}</p>
            <p>van ${data[i].openingTimes[0].from} tot ${data[i].openingTimes[0].to}</p>
          </div>
          <div class='spaces'>
            <p>Totaal: <br><span class="num">${total}</span></p>
            <p>Vrij: <br><span class="num open">${available}</span></p>
            <p>${icon}</p>
          </div>
        </div>  
        `;
        newspots.push(data[i].parkingStatus.availableCapacity);
      }
      localStorage.setItem('parkingSpot', newspots.toString());
      
    });
  });
}
getData();

// setInterval(function() {
//   getData();
//   compareSpots();
// })
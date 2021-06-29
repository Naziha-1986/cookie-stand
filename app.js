

'use strict';
let places = [];
// create object
function Location (name, min, max, avg) {
 this.name = name;
 this.min = min;
 this.max = max;
 this.avg = avg;
 this.randCust=[];
 this.avgCookiesPerH=[];
 this.total=0;

 places.push(this);
}

// calculte random customer per hour/random number( from shihab code)
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
Location.prototype.calCusPerHour= function() {
 for(let i=0; i < hours.length; i++){
 let min = Math.ceil(this.min);
 let max = Math.floor(this.max);
 let randCust = Math.floor(Math.random() * (max - min) + min);
 this.randCust.push(randCust);
 }
};
// calculate hoyrly total(columntitle:daily hourly total)
Location.prototype.calcAngCookiesPerH= function() {
 for(let i =0; i < hours.length; i++){
 this.avgCookiesPerH[i]=Math.floor(this.randCust[i] * this.avg);

 }
};

Location.prototype.calTotalCulmn=function(){
    for (let i=0; i <Location.length; i++){
        this.randCust(this.min, this.max);
        this.purchase();
    

    }

    this.total.push(this.purchase);
};


// create table
let container = document.getElementById('locations');

let tableEl = document.createElement('table');
container.appendChild(tableEl);


// 
function createTableHeader() {
 let trEl = document.createElement('tr');
 tableEl.appendChild(trEl);


// //  create column empty title
//  let thEl1 = document.createElement('th');
//  thEl1.textContent = '';
//  trEl.appendChild(thEl1);

// // loop for header rows
//  for(let i = 0; i < hours.length; i++) {
//  let thEl2 = document.createElement('th');
//  thEl2.textContent = hours[i];
//  trEl.appendChild(thEl2);
//  }
 
// // create column for dialy total
//  let thEl3 = document.createElement('th');
//  thEl3.textContent = 'daily Total';
//  trEl.appendChild(thEl3);
// }
// createTableHeader();

// // first location
// let seattle = new Location('Seattle', 23, 65, 6.3);
// // random number
// seattle.calCusPerHour();
// // hourly total
// seattle.calcAngCookiesPerH();

// // second location
// let tokyo = new Location('Tokyo', 3, 24, 1.2);
// tokyo.calCusPerHour();
// tokyo.calcAngCookiesPerH();

// // third location
// let dubai = new Location('Dubai', 11, 38, 3.7);
// dubai.calCusPerHour();
// dubai.calcAngCookiesPerH();


// // fourth location
// let paris = new Location('Paris', 20, 38, 2.3);
// paris.calCusPerHour();
// paris.calcAngCookiesPerH();

// // fifth location
// let lima = new Location('liam', 2, 16, 4.6);
// lima.calCusPerHour();
// lima.calcAngCookiesPerH();

// // creat places rows for all random numbers

// for(let i=0;i < places.length;i++){
//  let trEl = document.createElement('tr');
//  let td1 = document.createElement('td');
//  td1.textContent = places[i].name;
//  trEl.appendChild(td1);

// // creat rows total hourly for each place

//  let td2 = document.createElement('td');
//  td2.textContent = places[i].avgCookiesPerH;
//  trEl.appendChild(td2);

//  tableEl.appendChild(trEl);
// }

// // create footer
// function makeTableFooter() {
//  let trEl = document.createElement('tr');
//  tableEl.appendChild(trEl);
 
// // create total footer
//  let thEl10 = document.createElement('th');
//  thEl10.textContent = 'Totals';
//  trEl.appendChild(thEl10);

// }

// makeTableFooter();

//  console.log(places);












// ---------------------------------------------------
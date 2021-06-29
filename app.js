

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


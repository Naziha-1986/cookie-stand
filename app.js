

'use strict';

let all = [];

let cookiTable = document.getElementById('cookie-table');

function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customerPerHour = [];
    this.cookieSoldPerHour = [];
    this.totalCookies = 0;
    this.salesTotal = 0;

    Location.push(this);
}

// calculate customer per hour(random number)

Location.prototype.calCookieSold = function () {
    for (var i = 0; i < hours.length; i++) {
        let CustomerHourly = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        this.customerPerHour.push(CustomerHourly);
    }
};

let hours = ['', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    // calculate total cookies
    Location.prototype.calSoldEachHour = function () {


        for (let i = 0; i < hours.length; i++) {
            let hourlySold = Math.ceil(this.customerPerHour[i] * this.avgCookiesPerCustomer);
            this.cookieSoldPerHour.push(hourlySold);
            this.totalCookies += hourlySold;
        }
    };
}


let container = document.getElementById('location');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let thEl1 = document.createElement('th');
    thEl1.textContent = '';
    trEl.appendChild(thEl1);
    let thEl2 = document.createElement('th');
    thEl2.textContent = '9am';
    trEl.appendChild(thEl2);
    let thEl3 = document.createElement('th');
    thEl3.textContent = '10am';
    trEl.appendChild(thEl3);
    let thEl4 = document.createElement('th');
    thEl4.textContent = '11am';
    trEl.appendChild(thEl4);
    let thEl5 = document.createElement('th');
    thEl5.textContent = '12pm';
    trEl.appendChild(thEl5);
    let thEl6 = document.createElement('th');
    thEl5.textContent = '1pm';
    trEl.appendChild(thEl6);
    let thEl7 = document.createElement('th');
    thEl7.textContent = '2pm';
    trEl.appendChild(thEl7);
    let thEl8 = document.createElement('th');
    thEl8.textContent = '3pm';
    trEl.appendChild(thEl8);
    let thEl9 = document.createElement('th');
    thEl9.textContent = '4pm';
    trEl.appendChild(thEl9);
    let thEl20 = document.createElement('th');
    thEl20.textContent = '5pm';
    trEl.appendChild(thEl20);
    let thEl21 = document.createElement('th');
    thEl21.textContent = '6pm';
    trEl.appendChild(thEl21);
    let thEll6 = document.createElement('th');
    thEl6.textContent = '7pm';
    trEl.appendChild(thEl6);
}

let seattle=new Location('Seattle', 23, 65, 6.3);
seattle.render();

let Tokyo=new Location('Tokyo', 3, 24 , 1.2);
Tokyo.render();

let Dubai=new Location('Dubai', 11, 38 , 3.7);
Dubai.render();

let Paris=new Location('Paris', 20, 38 , 2.3);
Paris.render();

let Lima=new Location('Paris', 20, 38 , 2.3);
Lima.render();



createTableHeader();

for (let i = 0; i < hours.length; i++) {
    let trEl = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = location[i].name;
    let td2 = document.createElement('td');
    td2.textContent = Location[i].age;
    let td3 = document.createElement('td');
    td3.textContent = Location[i].gwk;
    let td4 = document.createElement('td');
    td4.textContent = Location[i].gwd;
    let td5 = document.createElement('td');
    td5.textContent = kittens[i].gwc;
    trEl.appendChild(td1);
    trEl.appendChild(td2);
    trEl.appendChild(td3);
    trEl.appendChild(td4);
    trEl.appendChild(td5);

    tableEl.appendChild(trEl);
}


// call /invoke function


// Location.prototype.render = function () {
//     this.calSoldEachHour();
//     let total = 0;
//     let row = document.createElement('tr');
//     let titleColumn = document.createElement('td');
//     titleColumn.textContent = this.name;
//     row.append(titleColumn);
//     for (let i = 0; i < hours.length; i++) {
//         let hourColumn = document.createElement('td');
//         hourColumn.textContent = this.cookieSoldPerHour[i];
//         row.appendChild(hourColumn);
//         total += this.cookieSoldPerHour[i];
//     }
//     let totalColumn = document.createElement('td');
//     totalColumn.textContent = total;
//     row.appendChild(totalColumn);
//     cookiTable.appendChild(row);

// };
// function makeHeaderRow() {
//     let trEl = document.createElement('tr');
//     let thEl = document.createElement('th');
//     thEl.textContent = 'Location';
//     trEl.appendChild(thEl);
//     for (var i = 0; i < hours.length; i++) {
//         thEl = document.createElement('th');
//         thEl.textContent = hours[i];
//         trEl.appendChild(thEl);
//     }
//     thEl = document.createElement('th');
//     thEl.textContent = 'Total';
//     trEl.appendChild(thEl);
// }

// function createTable() {
//     makeHeaderRow();
//     for (var i = 0; i < all.length; i++) {
//         all[i].render();
//     }
// }

// createTable();
let Seattle = new Location('Seattle', 23, 65, 6.3);
Seattle.calSoldEachHour();
Seattle.render();


let Tokyo = new Location('Tokyo', 3, 24, 1.2);
Tokyo.calSoldEachHour();
Tokyo.render();


let Dubai = new Location('Dubai', 11, 38, 3.7);

Dubai.calSoldEachHour();
Dubai.render();

let Paris = new Location('Paris', 20, 38, 2.3);

Paris.calSoldEachHour();
Paris.render();


let Lima = new Location('Lima', 2, 16, 4.6);

Lima.calSoldEachHour();
Lima.render();







// ---------------------------------------------------

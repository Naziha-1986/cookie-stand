'use strict';
let hours = ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customerPerHour = [];
    this.cookieSoldPerHour = [];
    this.totalCookies = 0;

    Locations.all.push(this);
}

    // calculate customer per hour(random number)

location.prototype.calCookieSold =function(){
    for (var i = 0; i < hours.length; i++) {
        let CustomerHourly=Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        this.customerPerHour.push(CustomerHourly);
}
// calculate total cookies

location.prototype.calSoldEachHour = function () {

    for (let i = 0; i < hours.length; i++) {
        let hourlySold = Math.ceil(this.customerPerHour[i] * this.avgCookiesPerCustomer);
        this.cookieSoldPerHour.push(hourlySold);
        this.totalCookies+=hourlySold;
    }

}
// call /invoke function
let seattle =new Location('seattle',23,65,6.3);
let Tokyo=new Location('Tokyo',3,24,1.2);
let Dubi=new Location('Dubi',11,38,3.7);
let Paris=new Location('Paris',20,38,2.3);
let Lima =new Location('Lima',2,16,4.6);

// create table





// claculate total daily for each location
// location.prototype.clTotalHourlyLocation=function(){

//     for( let i=0;i<location.length;i++){

//     }
// }




// let container = document.getElementById('location');
// let tableEl = document.createElement('table');
// container.appendChild(tableEl);

// function creatTableHeader() {
//     let trEl = document.createElement('tr');
//     tableEl.appendChild(trEl);

//     let thEl1 = document.createElement('th');
//     thEl.textContent = '';
//     trEl.appendChild(thEl1);

//     let thEl2 = document.createElement('th');
//     thEl.textContent = '9am';
//     trEl.appendChild(thEl2);

//     let thEl3 = document.createElement('th');
//     thEl3.textContent = '10am';
//     trEl.appendChild(thEl3);

//     let thEl4 = document.createElement('th');
//     thEl4.textContent = '11am';
//     trEl.appendChild(thEl4);

//     let thEl5 = document.createElement('th');
//     thEl5.textContent = '12pm';
//     trEl.appendChild(thEl5);

//     let thEl6 = document.createElement('th');
//     thEl6.textContent = '1pm';
//     trEl.appendChild(thEl6);

//     let thEl7 = document.createElement('th');
//     thEl7.textContent = '2pm';
//     trEl.appendChild(thEl7);

//     let thEl8 = document.createElement('th');
//     thEl8.textContent = '3pm';
//     trEl.appendChild(thEl8);

//     let thEl9 = document.createElement('th');
//     thEl9.textContent = '4pm';
//     trEl.appendChild(thEl9);

//     let thEl10 = document.createElement('th');
//     thEl10.textContent = '5pm';
//     trEl.appendChild(thEl10);

//     let thEl11 = document.createElement('th');
//     thEl11.textContent = '6pm';
//     trEl.appendChild(thEl11);

//     let thEl12 = document.createElement('th');
//     thEl2.textContent = '7pm';
//     trEl.appendChild(thEl12);

//     let thEl13 = document.createElement('th');
//     thEl3.textContent = 'Daily Location Total';
//     trEl.appendChild(thEl13);
// }

// let seattle = new location(3, 24, 1.2,);
// let Tokyo = new location();
// let Dubai = new location();
// let Paris = new location();
// let lima = new Location();

// for (let i = 0; i < location.length; i++) {
//     let trEl = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.textContent = location[i].name;
//     let td2 = document.createElement('td');
//     td2.textContent = [i].age;
// }









location.prototype.getTootalCookiPerhour = function () {
    let seatelEl = document.getElementById('seatelEl');
    let ulEl = document.createElement('ul');
    ulEl.textContent = 'Seattle';
    seatelEl.appendChild(ulEl);

    for (let i = 0; i < this.hours.length; i++) {

        let r = this.customerPerhour(this.max, this.min) * this.Avg;
        this.totalCookihoutr.push(Math.floor(r));


// let Seattle = {
//         min: 3,
//         max: 24,
//         Avg: 1.2,
//         hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//         customerPerhour: function (min, max) {
//             return Math.floor(Math.random() * (max - min + 1) + min);
//         },
//         totalCookihoutr: [],
//         totalcookies: 0,


//     render: function () {
//         let seatelEl = document.getElementById('seatelEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Seattle';
//         seatelEl.appendChild(ulEl);

//         for (let i = 0; i < this.hours.length; i++) {

//             let r= this.customerPerhour(this.max,this. min)*this.Avg;
//             this.totalCookihoutr.push(Math.floor(r));


//         }
//         for (let i = 0; i < this.totalCookihoutr.length; i++) {
//             let liElm = document.createElement('li');
//             window.li2 = liElm;
//             liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
//             ulEl.appendChild(liElm);


//             this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
//             // console.log(this.totalcookies);


//         }
//         li2.textContent = 'total=' + this.totalcookies;
//     }

// };
// Seattle.render();


// // 88888888//

// let Tokyo = {
//     min: 3,
//     max: 24,
//     Avg: 1.2,
//     hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     customerPerhour: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalCookihoutr: [],
//     totalcookies: 0,
//     render: function () {
//         let TokyolEl = document.getElementById('TokyoEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Tokyo';
//         TokyoEl.appendChild(ulEl);

//         for (let i = 0; i < this.hours.length; i++) {

//             let r= this.customerPerhour(this.max,this. min)*this.Avg;
//             this.totalCookihoutr.push(Math.floor(r));

//         }
//         for (let i = 0; i < this.totalCookihoutr.length; i++) {
//             let liElm = document.createElement('li');
//             window.li2 = liElm;
//             liElm.textContent = this.hours[i] +':' + this.totalCookihoutr[i];
//             ulEl.appendChild(liElm);
//             this.totalcookies = this.totalcookies + this.totalCookihoutr[i];

//         }
//         li2.textContent = 'total=' + this.totalcookies;
//     }

// };
// Tokyo.render();

// // 88888888888888888888

// let Dubai = {
//     min: 11,
//     max: 38,
//     Avg: 3.7,
//     hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     customerPerhour: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalCookihoutr: [],
//     totalcookies: 0,

//     render: function () {
//         let DubailEl = document.getElementById('DubailEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Dubai';
//         DubailEl.appendChild(ulEl);
//         // let sum = 0;
//         for (let i = 0; i < this.hours.length; i++) {
//             // sum+=this.totalcookies[i];
//             let r= this.customerPerhour(this.max,this. min)*this.Avg;
//             this.totalCookihoutr.push(Math.floor(r));


//         }
//         for (let i = 0; i < this.totalCookihoutr.length; i++) {
//             let liElm = document.createElement('li');
//             window.li2 = liElm;
//             liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
//             ulEl.appendChild(liElm);
//             this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
//             // console.log(this.totalcookies);


//         }
//         li2.textContent = 'total=' + this.totalcookies;
//     }

// };
// Dubai.render();


// // 888888888888888888888
// let Paris = {
//     min: 11,
//     max: 38,
//     Avg: 3.7,
//     hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     customerPerhour: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalCookihoutr: [],
//     totalcookies: 0,

//     render: function () {
//         let ParislEl = document.getElementById('ParislEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Paris';
//         ParislEl.appendChild(ulEl);
//         // let sum = 0;
//         for (let i = 0; i < this.hours.length; i++) {
//             // sum+=this.totalcookies[i];
//             let r= this.customerPerhour(this.max,this. min)*this.Avg;
//             this.totalCookihoutr.push(Math.floor(r));

//         }
//         for (let i = 0; i < this.totalCookihoutr.length; i++) {
//             let liElm = document.createElement('li');
//             window.li2 = liElm;
//             liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
//             ulEl.appendChild(liElm);
//             this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
//             // console.log(this.totalcookies);


//         }
//         li2.textContent = 'total=' + this.totalcookies;
//     }

// };
// Paris.render();



// // 88888888888888888888888888888888888888888
// let Lima = {
//     min: 11,
//     max: 38,
//     Avg: 3.7,
//     hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     customerPerhour: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalCookihoutr: [],
//     totalcookies: 0,

//     render: function () {
//         let LimalEl = document.getElementById('LimalEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Lima';
//         LimalEl.appendChild(ulEl);
//         // let sum = 0;
//         for (let i = 0; i < this.hours.length; i++) {


//             let r= this.customerPerhour(this.max,this. min)*this.Avg;
//             this.totalCookihoutr.push(Math.floor(r));
//             // sum+=this.totalcookies[i];


//         }
//         for (let i = 0; i < this.totalCookihoutr.length; i++) {
//             let liElm = document.createElement('li');
//             window.li2 = liElm;
//             liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
//             ulEl.appendChild(liElm);
//             this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
//             // console.log(this.totalcookies);


//         }
//         li2.textContent = 'total=' + this.totalcookies;

//     }

// };
// Lima.render();
// document.write();
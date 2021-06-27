'use strict';

let seattl = {
    min: 23,
    max: 65,
    Avg: 6.3,
    hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    customerPerhour: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalCookihoutr: [],
    totalcookies: 0,

    render: function () {
        let seatelEl = document.getElementById('seatelEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Seattle';
        seatelEl.appendChild(ulEl);
        // let sum = 0;
        for (let i = 0; i < this.hours.length; i++) {
            // sum+=this.totalcookies[i];

            this.totalCookihoutr.push(Math.floor(this.customerPerhour(this.min, this.max) * this.Avg));

        }
        for (let i = 0; i < this.totalCookihoutr.length; i++) {
            let liElm = document.createElement('li');
            window.li2 = liElm;
            liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
            ulEl.appendChild(liElm);

            // let liSum=document.createElement('li');
            // liSum.textContent='total ${sum}';
            // ulEl.appendChild(liSum);

            this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
            console.log(this.totalcookies);
            

        }
        li2.textContent = 'total=' + this.totalcookies;
    }

};
seattl.render();


// 88888888//

let Tokyo = {
    min: 3,
    max: 24,
    Avg: 1.2,
    hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    customerPerhour: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalCookihoutr: [],
    totalcookies: 0,
    render: function () {
        let TokyolEl = document.getElementById('TokyoEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Tokyo';
        TokyoEl.appendChild(ulEl);
        // let sum = 0;
        for (let i = 0; i < this.hours.length; i++) {
            // sum+=this.totalcookies[i];
            this.totalCookihoutr.push(Math.floor(this.customerPerhour(this.min, this.max) * this.Avg));
        }
        for (let i = 0; i < this.totalCookihoutr.length; i++) {
            let liElm = document.createElement('li');
            window.li2 = liElm;
            liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
            ulEl.appendChild(liElm);
            this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
            console.log(this.totalcookies);
        }
        li2.textContent = 'total=' + this.totalcookies;
    }

};
Tokyo.render();

// 88888888888888888888

let Dubai = {
    min: 11,
    max: 38,
    Avg: 3.7,
    hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    customerPerhour: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalCookihoutr: [],
    totalcookies: 0,

    render: function () {
        let DubailEl = document.getElementById('DubailEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Dubai';
        DubailEl.appendChild(ulEl);
        // let sum = 0;
        for (let i = 0; i < this.hours.length; i++) {
            // sum+=this.totalcookies[i];

            this.totalCookihoutr.push(Math.floor(this.customerPerhour(this.min, this.max) * this.Avg));

        }
        for (let i = 0; i < this.totalCookihoutr.length; i++) {
            let liElm = document.createElement('li');
            window.li2 = liElm;
            liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
            ulEl.appendChild(liElm);
            this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
            console.log(this.totalcookies);


        }
        li2.textContent = 'total=' + this.totalcookies;
    }

};
Dubai.render();


// 888888888888888888888
let Paris = {
    min: 11,
    max: 38,
    Avg: 3.7,
    hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    customerPerhour: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalCookihoutr: [],
    totalcookies: 0,

    render: function () {
        let ParislEl = document.getElementById('ParislEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Paris';
        ParislEl.appendChild(ulEl);
        // let sum = 0;
        for (let i = 0; i < this.hours.length; i++) {
            // sum+=this.totalcookies[i];

            this.totalCookihoutr.push(Math.floor(this.customerPerhour(this.min, this.max) * this.Avg));

        }
        for (let i = 0; i < this.totalCookihoutr.length; i++) {
            let liElm = document.createElement('li');
            window.li2 = liElm;
            liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
            ulEl.appendChild(liElm);
            this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
            console.log(this.totalcookies);


        }
        li2.textContent = 'total=' + this.totalcookies;
    }

};
Paris.render();

// 88888888888888888888888888888888888888888
let Lima = {
    min: 11,
    max: 38,
    Avg: 3.7,
    hours: ['9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    customerPerhour: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalCookihoutr: [],
    totalcookies: 0,

    render: function () {
        let LimalEl = document.getElementById('LimalEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Lima';
        ParislEl.appendChild(ulEl);
        // let sum = 0;
        for (let i = 0; i < this.hours.length; i++) {
            // sum+=this.totalcookies[i];

            this.totalCookihoutr.push(Math.floor(this.customerPerhour(this.min, this.max) * this.Avg));

        }
        for (let i = 0; i < this.totalCookihoutr.length; i++) {
            let liElm = document.createElement('li');
            window.li2 = liElm;
            liElm.textContent = this.hours[i] + ':' + this.totalCookihoutr[i];
            ulEl.appendChild(liElm);
            this.totalcookies = this.totalcookies + this.totalCookihoutr[i];
            console.log(this.totalcookies);


        }
        li2.textContent = 'total=' + this.totalcookies;
    }

};
Lima.render();

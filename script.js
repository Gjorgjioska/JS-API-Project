'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `
//             <article class="country${className} ">
//             <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name} </h3>
//                 <h4 class="country__region">${data.region} </h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} </p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 } </p>
//                 <p class="country__row"><span>💰</span> ${
//                   data.currencies[0].name
//                 }
//             </div>
//             </article>
//             `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   //   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   //   countriesContainer.style.opacity = 1;
// };
///////////////////////////////////////
// const getCountryData = (country, language) => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//         <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name} </h3>
//             <h4 class="country__region">${data.region} </h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} </p>
//             <p class="country__row"><span>🗣️</span>${
//               data.languages[0].name
//             } </p>
//             <p class="country__row"><span>💰</span> ${data.currencies[0].name}
//         </div>
//         </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany', 'deu');
// getCountryData('macedonia');

// const getCountryAndNeigbour = function (country) {
//   //////AJax call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     ///render country 1
//     renderCountry(data);

//     ///get neigbour country 2
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //////AJax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);

//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, ' neighbour');
//     });
//   });
// };

// // getCountryDatAndNeigbour('portugal');
// getCountryAndNeigbour('usa');

// setTimeout(() => {
//   console.log(' CAN WE SPEAK?');
//   setTimeout(() => {
//     console.log('HEYY, OF COURSE');
//     setTimeout(() => {
//       console.log('HOW I CAN HEALP YOU');
//       setTimeout(() => {
//         console.log(
//           'I WANT TO ASK YOU SOMETHNING ABOUT PROGRAMMING, IF YOU HAVE TIME'
//         );
//       }, 3000);
//     }, 1000);
//   }, 2000);
// }, 1000);

// const getCountryData = (country, language) => {
//       const request = new XMLHttpRequest();
//       request.open('GET', `https://restcountries.com/v2/name/${country}`);

//       request.send();

// const request = fetch('https://restcountries.com/v2/name/${portugal}');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg}   ${response.status}) `);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   ////country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`country not found ${response.status}) `);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders[0];

//       const neighbour = 'jssdsadhjksa';

//       if (!neighbour) return;

//       ////country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`country not found ${response.status}) `);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))

//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   ////country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders[0];

//       const neighbour = 'jssdsadhjksa';

//       if (!neighbour) return;

//       ////country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))

//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('australia');
// console.log('Test start');

// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 100000; i++) {}

//   console.log(res);
// });
// console.log('Test end');

const lottaryPromis = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You lost money'));
    }
  }, 2000);
});
lottaryPromis.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed ');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(2);
  })
  .then(() => {
    console.log('3 second passeed');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed ');
    return wait(1);
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc').catch(x => console.error(x)));

import Api from './addReservation.js';

class CommentData {
  constructor(username, reserve, id) {
    this.username = username;
    this.reserve = reserve;
    this.item_id = id;
  }
}

const renderReserve = (reserve) => `<li class="text-lg">
        <span>${reserve.date_start}</span> - 
        <span>${reserve.date_end}</span> -
        <span class="text-slate-600 mx-2">${reserve.username} : </span>
        <span>${reserve.reserve}</span>
      </li>`;
const showReserve = (data) => {
  const reserveContainer = document.querySelector('.reserve-container');
  const reserveCounterElement = document.querySelector('.reserve-counter');
  if (data.length > 0) {
    reserveCounterElement.innerHTML = `(${data.length})`;
    let containerString = '';
    data.forEach((dataItem) => {
      containerString += `${renderReserve(dataItem)} \n`;
    });

    reserveContainer.innerHTML = containerString;
  }
};
const displayReserve = (id) => {
  const api = new Api();
  let data = [];
  api
    .getReserve(undefined, id)
    .then((reserveData) => {
      data = reserveData;
      showReserve(data);
    })
    .catch((reserveData) => {
      data = reserveData;
    });
};
const createReserve = (e) => {
  e.preventDefault();
  const api = new Api();
  const form = document.getElementById('reserve-form');
  const comBtn = document.querySelector('.reserve-button');
  const id = comBtn.id.split('-')[2];
  const usernameInput = document.querySelector('.input');
  const reserveInput = document.querySelector('.reserve');

  const username = usernameInput.value;
  const reserve = reserveInput.value;
  const reserveObj = new CommentData(username, reserve, id);

  api
    .addReserve(reserveObj)
    .then(() => api.getReserve(undefined, id))
    .then((data) => {
      showReserve(data);
    });
  form.reset();
};
export { displayReserve, createReserve, showReserve };
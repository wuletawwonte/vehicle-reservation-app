import {getCars} from './apicalls.js';

const carsContainer = document.getElementById('vehicles-container');

const loadVehicles = async() => {
  let data = await getCars();
  carsContainer.innerHTML = data.map(car => `      <div class="v-item">
  <img src="${car.img_url}" alt="${car.model}">
  <div>
    <h2>${car.make}</h2>
    <p>3 Likes</p>
  </div>
  <div>
    <button type="button">Comments</button>
    <button type="button">Reservations</button>
  </div>
</div>
`).join('');
}

export { loadVehicles };
import getCars from './apicalls.js';

const carsContainer = document.getElementById('vehicles-container');

const loadVehicles = async () => {
  const data = await getCars();
  carsContainer.innerHTML = data.slice(0, 6).map((car) => `      <div class="v-item">
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
};

export default loadVehicles;
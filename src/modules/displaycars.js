import getCars from './apicalls.js';
import displayCommentPopup from '../comments/commentPopup.js';

const carsContainer = document.getElementById('popup-container');

const loadVehicles = async () => {
  const data = await getCars();
  carsContainer.innerHTML = data.slice(0, 6).map((car) => `      <div class="v-item">
  <img src="${car.img_url}" alt="${car.model}">
  <div>
    <h2>${car.make}</h2>
    <p>3 Likes</p>
  </div>
  <div>
    <button type="button" class="buttons" id = "${car.id}">Comments</button>
    <button type="button">Reservations</button>
  </div>
</div>
`).join('');
  const button = document.querySelectorAll('.buttons');
  button.forEach((car) => {
    car.onclick = () => displayCommentPopup(data.find((d) => d.id.toString() === car.id));
  });
};

export default loadVehicles;
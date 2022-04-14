import Likes from '../likes/likes.js';
import getCars from './apicalls.js';
import displayCommentPopup from '../comments/commentPopup.js';

const carsContainer = document.getElementById('popup-container');
const likes = new Likes();

const loadVehicles = async () => {
  const data = await getCars();
  carsContainer.innerHTML = data.slice(0, 6).map((car) => {
    const {
      img_url: imgUrl, model, make, _id: id,
    } = car;
    return `<div class="v-item">
      <img src="${imgUrl}" alt="${model}">
      <div>
        <h2>${make}</h2>
        <button type="button" class="btn like-btn" id="${id}">Like</button> 
        <p class="likes-count" data-car-id="${id}"></p>
      </div>
      <div>
        <button type="button" class="buttons" id = "${id}">Comments</button>
        <button type="button">Reservations</button>
      </div>
    </div>
    `;
  }).join('');
  const button = document.querySelectorAll('.buttons');
  button.forEach((car) => {
    car.onclick = () => displayCommentPopup(data.find((d) => d.id.toString() === car.id));
  });

  const likesCount = document.querySelectorAll('.likes-count');
  const allLikes = await likes.getAll();
  likesCount.forEach((item) => {
    const { carId } = item.dataset;
    allLikes.forEach((likeItem) => {
      if (likeItem.item_id === carId) {
        item.innerHTML = `${likeItem.likes} Likes`;
      }
    });
  });
};

export default loadVehicles;
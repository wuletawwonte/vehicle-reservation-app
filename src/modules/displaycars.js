import Likes from '../likes/likes.js';
import Cars from './cars.js';
import displayCommentPopup from '../comments/commentPopup.js';
import { displayComment } from '../comments/comments.js';

const carsContainer = document.getElementById('popup-container');
const carsCount = document.getElementById('vehicle-count');
const likes = new Likes();
const cars = new Cars();

const loadVehicles = async () => {
  const data = await cars.getAll();
  carsContainer.innerHTML = data.slice(0, 6).map((car) => {
    const {
      img_url: imgUrl,
      model,
      make,
      _id: id,
    } = car;
    return `<div class="column">
      <img src="${imgUrl}" alt="${model}" class="image">
      <i class="fa fa-heart like-btn" data-carid="${id}"></i>
      <div class="title">
        <h2>${make}</h2>
        <p class="likes-count" data-car-id="${id}" id=${id}></p>
      </div>
      <div class="btn">
        <button type="button" class="buttons" id = "${id}">Comments</button>
        <button type="button" class="button" id = "${id}">Reservations</button>
      </div>
    </div>
    `;
  }).join('');
  const button = document.querySelectorAll('.buttons');
  button.forEach((car) => {
    car.onclick = () => {
      const carItem = data.find((iCar) => {
        const { _id: id } = iCar;
        iCar.id = id;
        if (id === car.id) {
          return iCar;
        }
        return null;
      });
      displayCommentPopup(carItem);
      displayComment(car.id);
    };
  });

  const likesCount = document.querySelectorAll('.likes-count');
  const allLikes = await likes.getAll();
  likesCount.forEach((item) => {
    const { carId } = item.dataset;
    allLikes.forEach((likeItem) => {
      if (likeItem.item_id === carId) {
        item.innerHTML = `${likeItem.likes} ${likeItem.likes === 1 ? 'Like' : 'Likes'}`;
      }
    });
  });

  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach((likeBtn) => {
    likeBtn.addEventListener('click', async (e) => {
      const { carid } = e.target.dataset;
      const likeCount = await likes.like(carid);
      const likeCountContainer = document.getElementById(carid);
      likeCountContainer.innerHTML = `${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`;
    });
  });
};

const loadCarCount = async () => {
  const count = await cars.count();
  carsCount.innerHTML = `(${count})`;
};

export { loadVehicles, loadCarCount };
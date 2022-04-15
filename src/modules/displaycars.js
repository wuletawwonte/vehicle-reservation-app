import Likes from '../likes/likes.js';
import getCars from './apicalls.js';
import displayCommentPopup from '../comments/commentPopup.js';
import { displayComment } from '../comments/comments.js'

const carsContainer = document.getElementById('popup-container');
const likes = new Likes();

const loadVehicles = async() => {
    const data = await getCars();
    carsContainer.innerHTML = data.slice(0, 6).map((car) => {
        const {
            img_url: imgUrl,
            model,
            make,
            _id: id,
        } = car;
        return `<div class="column">
      <img src="${imgUrl}" alt="${model}" class="image">
      <div class="title">
        <h2>${make}</h2>
        <button type="button" class="btn like-btn" data-car-id="${id}">Like</button> 
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

            displayCommentPopup(data.map(item => ({...item, id: item._id })).find((item) => item._id === car.id))
            displayComment(car.id)
        }
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
      const { carId } = e.target.dataset;
      const likeCount = await likes.like(carId);
      const likeCountContainer = document.getElementById(carId);
      likeCountContainer.innerHTML = `${likeCount} ${likeCount === 1 ? 'Like' : 'Likes'}`;
    });
  });

};

export default loadVehicles;
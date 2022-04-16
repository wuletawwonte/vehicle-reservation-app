import { createReserve } from './reservations.js';

const reserveContainer = document.getElementById('popup-container');
const displayReservePopup = (data) => {
  reserveContainer.innerHTML = `
   <div id="modal">
     <img src="${data.img_url}" alt="" class="img"/>
     <div class="details">
     <div class="closeDetails">
     <h2>${data.make}</h2>
     <span class="closeButton"><i class="fas fa-times"></i></span>
     </div>
     <ul>
     <li>Model : ${data.model}</li>
     <li>Year : ${data.year}</li>
     <li>Horsepower : ${data.horsepower}</li>
     <li>Price : $${data.price}</li>
     </ul>
     </div>
     <div class="add">
   <h2>Add Reservation</h2>
   <form id='reserve-form'>
   <input type="text" class=" input" placeholder="Enter your username" />
   <input type="date" class=" reserve" placeholder="Enter your username" />
   <input type="date" class=" reserve" placeholder="Enter your username" />
    <button id="reserve-button-${data.id}" class="reserve-button" type="submit">Reserve</button>
   </form>
   </div>
     <div class="comments">
   <h2>Reservations <span class="reserve-counter"></span></h2>
   <ul class="reserve-container">
   </ul>
   </div>
  </div>
   `;
  const form1 = document.querySelector('.reserve-button');
  form1.addEventListener('click', createReserve);

  const closeBtn = document.querySelector('.closeButton');
  closeBtn.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    window.onload();
    reserveContainer.style.display = 'block';
  });
};

export default displayReservePopup;
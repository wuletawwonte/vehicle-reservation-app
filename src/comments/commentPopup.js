import { createComment } from './comments.js';

const modalContainer = document.getElementById('popup-container');
const displayCommentPopup = (data) => {
  modalContainer.innerHTML = `
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
   <h2>Add Comment</h2>
   <form id='comment-form'>
   <input class=" input" placeholder="Enter your username" />
    <textarea class="comment" placeholder="Write your comment here" type="text"></textarea>
    <button id="comment-button-${data.id}" class="comment-button" type="submit">Comment</button>
   </form>
   </div>
     <div class="comments">
   <h2>Comments <span class="comment-counter"></span></h2>
   <ul class="comment-container">
   </ul>
   </div>
  </div>
   `;
  const form1 = document.querySelector('.comment-button');
  form1.addEventListener('click', createComment);

  const closeBtn = document.querySelector('.closeButton');
  closeBtn.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    window.onload();
    modalContainer.style.display = 'block';
  });
};

export default displayCommentPopup;
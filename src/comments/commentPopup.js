const modalContainer = document.getElementById('popup-container');
const displayCommentPopup = (data) => {
  console.log(data, 'data');
  if (modalContainer.classList.contains('hidden')) {
    modalContainer.classList.add('show');
    modalContainer.classList.remove('hidden');
  }
  modalContainer.innerHTML = `
   <div id="modal">
     <img src="${data.img_url}" alt=""/>
     <span id="close-modal-btn" class="close"><i class="fas fa-times"></i></span>
     <h2>${data.make}</h2>
     <ul>
     <li>Model : ${data.model}</li>
     <li>Year : ${data.year}</li>
     <li>Horsepower : ${data.horsepower}</li>
     <li>Price : $${data.price}</li>
     </ul>
   <h2>Comments (<span class="comment-counter-header"></span>)</h2>
   <ul class="comment-container">
   </ul>
   <h2>Add Comment</h2>
   <form id='comment-form'>
   <input class=" input" placeholder="Enter your username" />
    <textarea class="comment" placeholder="Write your comment here" type="text"></textarea>
    <button id="comment-button-${data.id}" class="comment-button" type="submit">Comment</button>
   </form>
  </div>
   `;
  return displayCommentPopup;
};

export default displayCommentPopup;
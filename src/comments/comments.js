import Api from './addComments.js';

class CommentData {
  constructor(username, comment, id) {
    this.username = username;
    this.comment = comment;
    this.item_id = id;
  }
}

const renderComment = (comment) => `<li class="text-lg">
        <span>${comment.creation_date}</span> -
        <span class="text-slate-600 mx-2">${comment.username} : </span>
        <span>${comment.comment}</span>
      </li>`;
const displayComment = (id) => {
  const api = new Api();
  let data = [];
  api
    .getComment(undefined, id)
    .then((commentData) => {
      data = commentData;
      const CommentContainer = document.querySelector('.comment-container');
      if (data.length > 0) {
        let containerString = '';
        data.forEach((dataItem) => {
          containerString += `${renderComment(dataItem)} \n`;
        });

        CommentContainer.innerHTML = containerString;
      } else {
        CommentContainer.innerHTML = '';
      }
    })
    .catch((commentData) => {
      data = commentData;
    });
};
const createComment = () => {
  const api = new Api();
  const form = document.getElementById('comment-form');
  const comBtn = document.querySelector('.comment-button');
  const id = comBtn.id.split('-')[2];
  const usernameInput = document.querySelector('.input');
  const commentInput = document.querySelector('.comment');

  const username = usernameInput.value;
  const comment = commentInput.value;
  const commentObj = new CommentData(username, comment, id);

  api
    .addComment(commentObj)
    .then(() => api.getComment(undefined, id))
    .then(() => {
      displayComment(id);
    });
  form.reset();
};
export { displayComment, createComment };
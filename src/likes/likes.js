class Likes {
  constructor(baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/') {
    this.apiId = 'b2zuy7eMXykf5uW3eblG';
    this.likesUrl = `${baseURL}${this.apiId}/likes`;
  }

  getAll = async () => {
    const response = await fetch(this.likesUrl);
    const allLikes = response.json();
    return allLikes;
  };

  like = async (carId) => {
    const likedCar = {
      item_id: carId,
    };
    await fetch(this.likesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likedCar),
    });
    const allLikes = await this.getAll(); 
    const { likes } = allLikes.find(item => item.item_id === carId);
    return likes;
  };

}

export default Likes;
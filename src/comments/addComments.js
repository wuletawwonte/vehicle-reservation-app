class Api {
  constructor(
    involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  ) {
    this.carId = 'b2zuy7eMXykf5uW3eblG';
    this.root = involvementApi;
    this.comments = `${involvementApi}${this.carId}/comments`;
  }

    getComment = async (root = this.comments, itemId) => {
      try {
        const url = `${this.comments}?item_id=${itemId}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        return response.json();
      } catch (error) {
        return [root];
      }
    };

    addComment = async (
      bodyData,
    ) => {
      await fetch(this.comments, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
    };
}

export default Api;
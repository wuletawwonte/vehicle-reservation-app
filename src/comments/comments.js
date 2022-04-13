class Api {
  constructor(
    involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  ) {
    this.carId = 'K2k68wPBsTKAT68ziNEu';
    this.root = involvementApi;
    this.comments = `${involvementApi}${this.carId}/comments`;
  }

    getComment = async (
      root = this.comments,
      id,
    ) => {
      try {
        const url = `${root}?item_id=${id}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        return response.json();
      } catch (error) {
        return [];
      }
    };

    addComment = async (
      url = this.comments,
      bodyData,
    ) => {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
    };

    addComment = (bodyData) => this.addComment(this.comments, bodyData);

    getComment = (id) => this.getComment(this.comments, id);
}

export default Api;
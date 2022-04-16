class Api {
  constructor(
    involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  ) {
    this.carId = 'b2zuy7eMXykf5uW3eblG';
    this.root = involvementApi;
    this.reservations = `${involvementApi}${this.carId}/reservations`;
  }

    getReserve = async (root = this.reservations, itemId) => {
      try {
        const url = `${this.reservations}?item_id=${itemId}`;
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

    addReserve = async (
      bodyData,
    ) => {
      await fetch(this.reservations, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
    };
}

export default Api;
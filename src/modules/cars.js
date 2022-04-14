export default class Cars {
  constructor() {
    this.url = 'https://vehicle-reservation-api.herokuapp.com/vehicle';
  }
  getAll = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  };

  count = async () => {
    const allCars = await this.getAll();
    return allCars.length;
  }
}

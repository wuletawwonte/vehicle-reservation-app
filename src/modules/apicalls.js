const url = 'https://vehicle-reservation-api.herokuapp.com/vehicle';

const getCars = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getCars;
const url = 'https://private-fa07cd-carsapi1.apiary-mock.com/cars';

const getCars = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getCars;
import { expect } from '@jest/globals';
import Cars from '../modules/cars.js';

describe('total vehicles: ', () => {
  let cars;
  beforeEach(() => {
    cars = new Cars();
  })
  test('equals item count', async () => {
    const total = 6;
    const totalCars = await cars.count();
    expect(totalCars).toEqual(total);
  })
})
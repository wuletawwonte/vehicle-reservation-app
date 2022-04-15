import { expect } from '@jest/globals';
import Cars from '../modules/cars.js';

describe('total vehicles: ', () => {
  let cars;
  beforeEach(() => {
    cars = new Cars();
  })
  test('equals item count', async () => {
    const total = 8;
    cars.count().then(data => {
      expect(data).toEqual(total);
    }).catch(err => console.log(err));
  })
})
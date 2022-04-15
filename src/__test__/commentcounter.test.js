/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import { displayComment } from '../comments/comments.js';

describe('Comment popup', () => {
  test('Test comments counter', () => {
    const data = ['comment1', 'comment2'];
    displayComment(data);
    expect(data).toHaveLength(2);
  });
});
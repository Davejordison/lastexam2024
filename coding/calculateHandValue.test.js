import assert from 'node:assert';
import { test } from 'node:test';
import { calculateHandValue } from './index.js';

test('calculateHandValue calculates the correct value for a hand without aces', () => {
  assert.strictEqual(calculateHandValue(['2', '3', '4', '5']), 14);
  assert.strictEqual(calculateHandValue(['10', 'J', 'Q', 'K']), 40);
  assert.strictEqual(calculateHandValue(['9', '8', '7']), 24);
});

test('calculateHandValue calculates the correct value for a hand with aces', () => {
  assert.strictEqual(calculateHandValue(['A', '9']), 20); // 11 + 9
  assert.strictEqual(calculateHandValue(['A', 'A', '9']), 21); // 11 + 1 + 9
  assert.strictEqual(calculateHandValue(['A', 'A', 'A']), 13); // 11 + 1 + 1
});

test('calculateHandValue calculates the correct value for a mixed hand', () => {
  assert.strictEqual(calculateHandValue(['A', '9', '5']), 15); // 11 + 9 + 5 = 25 -> 1 + 9 + 5 = 15
  assert.strictEqual(calculateHandValue(['A', 'K']), 21); // 11 + 10
  assert.strictEqual(calculateHandValue(['A', '2', '9']), 12); // 11 + 2 + 9 = 22 -> 1 + 2 + 9 = 12
});

test('calculateHandValue handles an empty hand', () => {
  assert.strictEqual(calculateHandValue([]), 0);
});

test('calculateHandValue handles all face cards', () => {
  assert.strictEqual(calculateHandValue(['J', 'Q', 'K']), 30);
});

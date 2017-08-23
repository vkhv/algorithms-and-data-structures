const binarySearch = require('./binary-search');
const sortedNumbersArray = [20, 40, 70, 90, 100, 200, 300, 400, 500];

test('Check elem from left side', () => {
  expect(binarySearch(sortedNumbersArray, 40)).toBe(1);
});

test('Check elem from right side', () => {
    expect(binarySearch(sortedNumbersArray, 400)).toBe(7);
});

test('Check first elem', () => {
    expect(binarySearch(sortedNumbersArray, 20)).toBe(0);
});

test('Check last elem', () => {
    expect(binarySearch(sortedNumbersArray, 500)).toBe(8);
});

test('Check middle elem', () => {
    expect(binarySearch(sortedNumbersArray, 90)).toBe(3);
});
import ErrorRepository from '../js/app';

test('check validate Error', () => {
  const error = new ErrorRepository();
  const received = error.translate(111);
  const expected = 'Error111';
  expect(received).toBe(expected);
});

test('check invalidate Error', () => {
  const error = new ErrorRepository();
  const received = error.translate(777);
  const expected = 'Unknown error';
  expect(received).toBe(expected);
});

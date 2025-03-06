import '@testing-library/jest-dom';

global.console = {
  log: console.log,
};

beforeEach(() => {
  global.console.warn = jest.fn();
  global.console.error = jest.fn();
});

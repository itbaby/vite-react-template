import '@testing-library/jest-dom';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock CSS modules
const cssProxy = new Proxy(
  {},
  {
    get: () => '',
    getOwnPropertyDescriptor: () => ({ configurable: true, enumerable: true }),
  }
);

global.cssProxy = cssProxy;

import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

// Add type reference
/// <reference types="@testing-library/jest-dom" />

// Extend globalThis type
declare global {
  var cssProxy: { [key: string]: string };
}

// Mock SVG imports
const svgMock = 'SvgMock';
export default svgMock;

// Mock CSS modules
const cssProxy = new Proxy({}, {
  get: () => '',
  getOwnPropertyDescriptor: () => ({ configurable: true, enumerable: true }),
});

globalThis.cssProxy = cssProxy;

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

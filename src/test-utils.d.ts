/// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom';

declare module '@testing-library/react' {
  export interface TextMatch {
    (content: string | RegExp | number): boolean;
    (content: string | RegExp | number, options?: { exact?: boolean | undefined; normalizer?: boolean | undefined }): boolean;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp | number, options?: { normalizer?: (text: string) => string }): R;
    }
  }
}

import { Assertion, AssertionFactory } from '../assertions/index';

/**
 *
 * @param errorFn - Accepts a function that will be executed and the result will be compared with the expected value if any.
 * @param expectedError - Accepts an error that will be compared with the error thrown by the function.
 * @returns Assertion<T>
 */
export function assertThrows<T extends (...args: any[]) => unknown>(
  errorFn: T,
  expectedError?: any,
): Assertion<T> {
  return AssertionFactory.get('ThrowsAssertion', expectedError, errorFn);
}

import { Assertion, AssertionFactory } from '../assertions/index';

export function assertNotEquals<T>(expected: T, actual: T): Assertion<T> {
  return AssertionFactory.get('NotEqualsAssertion', expected, actual);
}

import { Assertion, AssertionFactory } from '../assertions/index';

export function assertEquals<T>(expected: T, actual: T): Assertion<T> {
  return AssertionFactory.get('EqualsAssertion', expected, actual);
}

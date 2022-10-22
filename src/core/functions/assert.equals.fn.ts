import { Assertion, AssertionFactory } from '../assertions/index';

export function assertEquals<T>(expected: T, actual: T): Assertion<T> {
  return AssertionFactory.get<T>('EqualsAssertion', expected, actual);
}

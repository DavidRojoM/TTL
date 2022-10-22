import { Assertion, AssertionFactory } from '../assertions/index';

export function assertGreater<T>(greaterThan: T, actual: T): Assertion<T> {
  return AssertionFactory.get('GreaterAssertion', greaterThan, actual);
}

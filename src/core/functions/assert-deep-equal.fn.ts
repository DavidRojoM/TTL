import { Assertion, AssertionFactory } from '../assertions/index';

export function assertDeepEqual<T extends object>(expected: T, actual: T): Assertion<T> {
  return AssertionFactory.get('DeepEqualAssertion', expected, actual);
}

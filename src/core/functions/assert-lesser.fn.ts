import { Assertion, AssertionFactory } from '../assertions/index';

export function assertLesser<T>(expected: T, actual: T): Assertion<T> {
  return AssertionFactory.get('LesserAssertion', expected, actual);
}

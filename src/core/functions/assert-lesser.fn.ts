import { Assertion } from '../../assertions/index';
import { AssertionFactory } from '../../assertions/index';

export function assertLesser<T>(expected: T, actual: T): Assertion<T> {
  return AssertionFactory.get('LesserAssertion', expected, actual);
}

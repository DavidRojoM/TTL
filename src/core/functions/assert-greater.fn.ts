import { Assertion } from '../../assertions/assertion';
import { AssertionFactory } from '../../assertions/index';

export function assertGreater<T>(expected: T, actual: T): Assertion<T> {
  return AssertionFactory.get('GreaterAssertion', expected, actual);
}

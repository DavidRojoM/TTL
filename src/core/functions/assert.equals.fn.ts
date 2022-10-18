import { EqualsAssertion } from '../../assertions/equals.assertion';

export function assertEquals<T>(expected: T, actual: T): EqualsAssertion<T> {
  return new EqualsAssertion(expected, actual);
}

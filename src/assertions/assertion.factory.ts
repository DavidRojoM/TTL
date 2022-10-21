import { Assertion } from './assertion';
import { DeepEqualAssertion } from './deep-equals.assertion';
import { EqualsAssertion } from './equals.assertion';
import { GreaterAssertion } from './greater.assertion';
import { LesserAssertion } from './lesser.assertion';

const assertions = {
  EqualsAssertion,
  GreaterAssertion,
  LesserAssertion,
  DeepEqualAssertion,
} as const;

export class AssertionFactory {
  static get<T>(type: keyof typeof assertions, expected: T, actual: T): Assertion<T> {
    return new assertions[type]<T>(expected, actual);
  }
}

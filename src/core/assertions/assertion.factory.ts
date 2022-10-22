import { Assertion } from '../../shared-kernel/building-blocks/assertion';
import { DeepEqualAssertion } from './deep-equals/deep-equals.assertion';
import { EqualsAssertion } from './equals/equals.assertion';
import { GreaterAssertion } from './greater/greater.assertion';
import { LesserAssertion } from './lesser/lesser.assertion';

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

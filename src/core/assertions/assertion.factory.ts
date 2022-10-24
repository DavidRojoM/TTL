import { Assertion } from '../../shared-kernel/building-blocks/assertion';
import { DeepEqualAssertion } from './deep-equals/deep-equals.assertion';
import { EqualsAssertion } from './equals/equals.assertion';
import { GreaterAssertion } from './greater/greater.assertion';
import { LesserAssertion } from './lesser/lesser.assertion';
import { NotEqualsAssertion } from './not-equals/not-equals.assertion';
import { ThrowsAssertion } from './throws/throws.assertion';

const assertions = {
  EqualsAssertion,
  GreaterAssertion,
  LesserAssertion,
  DeepEqualAssertion,
  NotEqualsAssertion,
  ThrowsAssertion,
} as const;

export class AssertionFactory {
  static get(
    type: keyof typeof assertions,
    expected: unknown,
    actual: unknown,
  ): Assertion<unknown> {
    return new assertions[type](expected, actual as unknown as any);
  }
}

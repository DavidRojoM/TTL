import { TestResult } from '../../../shared-kernel/types/index';
import { Result } from '../../index';
import { Assertion } from '../../../shared-kernel/building-blocks/assertion';
import { TypeMissmatchException } from './exceptions/type-missmatch.exception';
import { NotEqualsException } from './exceptions/not-equals.exception';

export class DeepEqualAssertion<T> extends Assertion<T> {
  constructor(private readonly expected: T, private readonly actual: T) {
    super();
  }
  assert(): TestResult {
    if (typeof this.expected !== typeof this.actual) {
      return Result.error({
        error: new TypeMissmatchException({
          typeOfExpected: typeof this.expected,
          typeOfActual: typeof this.actual,
        }),
      });
    }

    if (JSON.stringify(this.expected) !== JSON.stringify(this.actual)) {
      return Result.error({
        error: new NotEqualsException({
          expected: JSON.stringify(this.expected),
          actual: JSON.stringify(this.actual),
        }),
      });
    }
    return Result.success();
  }
}

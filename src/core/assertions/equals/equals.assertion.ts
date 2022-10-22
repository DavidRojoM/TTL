import { TestResult } from '../../../shared-kernel/types/index';
import { Result } from '../../index';
import { Assertion } from '../../../shared-kernel/building-blocks/assertion';
import { NotEqualsException } from './exceptions/not-equals.exception';
import { TypeMissmatchException } from './exceptions/type-missmatch.exception';

export class EqualsAssertion<T> extends Assertion<T> {
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

    if (this.expected !== this.actual) {
      return Result.error({
        error: new NotEqualsException({
          expected: this.expected,
          actual: this.actual,
        }),
      });
    }
    return Result.success();
  }
}

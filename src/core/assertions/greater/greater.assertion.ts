import { TestResult } from '../../../shared-kernel/types/index';
import { Result } from '../../index';
import { Assertion } from '../../../shared-kernel/building-blocks/assertion';
import { TypeMissmatchException } from './exceptions/type-missmatch.exception';
import { NotGreaterException } from './exceptions/not-greater.exception';

export class GreaterAssertion<T> extends Assertion<T> {
  constructor(private readonly greaterThan: T, private readonly actual: T) {
    super();
  }
  assert(): TestResult {
    if (typeof this.greaterThan !== typeof this.actual) {
      return Result.error({
        error: new TypeMissmatchException({
          typeOfExpected: typeof this.greaterThan,
          typeOfActual: typeof this.actual,
        }),
      });
    }

    if (this.actual <= this.greaterThan) {
      return Result.error({
        error: new NotGreaterException({
          greaterThan: this.greaterThan,
          actual: this.actual,
        }),
      });
    }
    return Result.success();
  }
}

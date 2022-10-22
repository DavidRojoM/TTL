import { TestResult } from '../../../shared-kernel/types/index';
import { Result } from '../../index';
import { Assertion } from '../../../shared-kernel/building-blocks/assertion';
import { TypeMissmatchException } from './exceptions/type-missmatch.exception';
import { NotLesserException } from './exceptions/not-lesser.exception';

export class LesserAssertion<T> extends Assertion<T> {
  constructor(private readonly lesserThan: T, private readonly actual: T) {
    super();
  }
  assert(): TestResult {
    if (typeof this.lesserThan !== typeof this.actual) {
      return Result.error({
        error: new TypeMissmatchException({
          typeOfExpected: typeof this.lesserThan,
          typeOfActual: typeof this.actual,
        }),
      });
    }

    if (this.actual >= this.lesserThan) {
      return Result.error({
        error: new NotLesserException({
          lesserThan: this.lesserThan,
          actual: this.actual,
        }),
      });
    }
    return Result.success();
  }
}

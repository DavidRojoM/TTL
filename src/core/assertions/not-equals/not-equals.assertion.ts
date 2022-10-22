import { TestResult } from '../../../shared-kernel/types/index';
import { Result } from '../../index';
import { Assertion } from '../../../shared-kernel/building-blocks/assertion';
import { EqualsException } from './exceptions/equals.exception';

export class NotEqualsAssertion<T extends unknown> extends Assertion<T> {
  constructor(private readonly notEqualTo: T, private readonly actual: T) {
    super();
  }
  assert(): TestResult {
    if (this.actual === this.notEqualTo) {
      return Result.error({
        error: new EqualsException({
          notEqualTo: this.notEqualTo,
          actual: this.actual,
        }),
      });
    }
    return Result.success();
  }
}

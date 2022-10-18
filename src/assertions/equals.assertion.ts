import { Result } from '../core/test.result';
import { TestResult } from '../types/test-result.type';
import { Assertion } from './assertion';

export class EqualsAssertion<T> extends Assertion<T> {
  constructor(private readonly expected: T, private readonly actual: T) {
    super();
  }
  assert(): TestResult {
    if (typeof this.expected !== typeof this.actual) {
      // TODO: ADD a better exception
      return Result.error({
        error: new Error(
          `Expected ${this.expected} to be of type ${typeof this
            .expected} but was ${typeof this.actual}`,
        ),
      });
    }

    if (this.expected !== this.actual) {
      return Result.error({
        // TODO: Add a better exception
        error: new Error('TODO'),
      });
    }
    return Result.success();
  }
}

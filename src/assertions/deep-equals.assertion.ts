import { Result } from '../core/test.result';
import { TestResult } from '../types/test-result.type';
import { Assertion } from './assertion';

export class DeepEqualAssertion<T> extends Assertion<T> {
  constructor(private readonly expected: T, private readonly actual: T) {
    super();
  }
  assert(): TestResult {
    if (typeof this.expected !== typeof this.actual) {
      // TODO: ADD a proper exception
      return Result.error({
        error: new Error(
          `Expected ${this.expected} to be of type ${typeof this
            .expected} but was ${typeof this.actual}`,
        ),
      });
    }

    if (JSON.stringify(this.expected) !== JSON.stringify(this.actual)) {
      return Result.error({
        // TODO: Add a proper exception
        error: new Error('RESULT-ERROR'),
      });
    }
    return Result.success();
  }
}

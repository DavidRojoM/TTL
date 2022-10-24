import { Nullish, TestResult } from '../../../shared-kernel/types/index';
import { Result } from '../../index';
import { Assertion } from '../../../shared-kernel/building-blocks/assertion';

export class ThrowsAssertion<T extends unknown> extends Assertion<T> {
  constructor(
    private readonly expectedError: Nullish<T>,
    private readonly errorFn: (...args: any[]) => any,
  ) {
    super();
  }
  assert(): TestResult {
    try {
      this.errorFn();
      return Result.error({
        error: new Error('Expected error to be thrown'),
      });
    } catch (error) {
      if (typeof this.expectedError === 'undefined') {
        return error instanceof Error
          ? Result.success()
          : Result.error({
              // TODO: create a proper exception
              error: new Error('Not throws'),
            });
      }

      if (typeof error !== 'object') {
        return this.expectedError === error
          ? Result.success()
          : // TODO: create a proper exception
            Result.error({ error: new Error('Not throws expected error') });
      }

      try {
        if (error instanceof (this.expectedError as any)) {
          return Result.success();
        }
      } catch (error) {
        return Result.error({
          error: new Error('Not throws expected error'),
        });
      }
      return Result.error({
        // TODO: create a proper exception
        error: new Error('Not throws'),
      });
    }
  }
}

import { Nullish } from '../shared-kernel/types/nullish.type';
import {
  TestFailure,
  TestSkipped,
  TestSuccess,
} from '../shared-kernel/types/test-result.type';

export class Result {
  static error({ error }: { message?: Nullish<string>; error: Error }): TestFailure {
    return {
      type: 'fail',
      error,
    };
  }
  static success(): TestSuccess {
    return {
      type: 'ok',
    };
  }

  static skip(): TestSkipped {
    return {
      type: 'skipped',
    };
  }
}

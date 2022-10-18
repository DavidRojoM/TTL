import { TestResult } from '../types/test-result.type';

export abstract class Assertion<T> {
  abstract assert(): TestResult;
}

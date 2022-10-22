import { TestResult } from '../types/index';

export abstract class Assertion<T> {
  abstract assert(): TestResult;
}

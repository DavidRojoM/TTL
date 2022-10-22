import { Nullish } from './nullish.type';

export interface TTestResult {
  type: string;
  message?: Nullish<string>;
}

export interface TestSuccess extends TTestResult {
  type: 'ok';
}

export interface TestFailure extends TTestResult {
  type: 'fail';
  error: Error;
}

export interface TestSkipped extends TTestResult {
  type: 'skipped';
}

export type TestResult = TestSuccess | TestFailure | TestSkipped;

export interface EndedTest {
  description?: Nullish<string>;
  result: TestResult;
}

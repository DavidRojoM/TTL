import { Nullish } from './nullish.type';

export type TestSuccess = {
  type: 'ok';
  message?: Nullish<string>;
};

export type TestFailure = {
  type: 'fail';
  message?: Nullish<string>;
  error: Error;
};

export type TestResult = TestSuccess | TestFailure;

export type EndedTest = {
  description?: Nullish<string>;
  result: TestResult;
};

import { Assertion } from './assertion';

export interface ITestGroup {
  do<T>(description: string, assertion: T extends Assertion<T> ? T : never): this;
  skip<T>(description: string, assertion: T extends Assertion<T> ? T : never): this;
  skipChain<T>(description: string, assertion: T extends Assertion<T> ? T : never): this;
}

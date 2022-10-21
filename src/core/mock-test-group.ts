import { Assertion } from '../assertions/index';
import { ITestGroup } from './interfaces/test-group.interface';

export class MockTestGroup implements ITestGroup {
  constructor(private readonly cb: (description: string) => void) {}

  do<T>(description: string, assertion: T extends Assertion<T> ? T : never): this {
    this.cb(description);
    return this;
  }

  skip<T>(description: string, assertion: T extends Assertion<T> ? T : never): this {
    this.cb(description);
    return this;
  }

  skipChain(description: string, assertion: any): this {
    this.cb(description);
    return this;
  }
}

import { groupDescriptionSymbol, groupResultsSymbol } from './symbols';
import { EndedTest } from '../shared-kernel/types/test-result.type';
import { MockTestGroup } from './index';
import { Result } from './test.result';
import { Assertion } from './assertions/index';
import { ITestGroup } from '../shared-kernel/index';

export class TestGroup implements ITestGroup {
  protected _results: EndedTest[] = [];

  [groupDescriptionSymbol] = this._description;
  [groupResultsSymbol] = this._results;

  constructor(private readonly _description: string) {}

  /**
   *
   * Executes an assertion
   *
   * @param description - Description of the test
   * @param assertion - Assertion to execute
   * @returns TestGroup
   */
  do<T>(description: string, assertion: T extends Assertion<T> ? T : never): this {
    this._results.push({
      description,
      result: assertion.assert(),
    });
    return this;
  }

  /**
   *
   * Skips the assertion result
   *
   * @param description -  Description of the test
   * @param assertion - Assertion to skip
   * @returns TestGroup
   */
  skip(description: string, assertion: any): this {
    const handler = (description: string) => {
      this._results.push({
        description,
        result: Result.skip(),
      });
    };
    handler(description);
    return this;
  }

  /**
   *
   * Skips this assertion and the following ones in the call chain
   *
   * @param description - Description of the test
   * @param assertion - Assertion to skip
   * @returns TestGroup
   */
  skipChain(description: string, assertion: any): this {
    const handler = (description: string) => {
      this._results.push({
        description,
        result: Result.skip(),
      });
    };
    handler(description);
    return new MockTestGroup(handler) as unknown as this;
  }
}

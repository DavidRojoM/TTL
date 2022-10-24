import { testGroupsSymbol } from './symbols';
import { TestGroup } from './index';
import { Assertion } from './assertions/index';

export class ProposedTest {
  private _groups: TestGroup[] = [];
  [testGroupsSymbol] = this._groups;

  /**
   *
   * Creates a group that can be used to run multiple assertions
   *
   * @param name - Name of the group
   * @param group - Callback group to execute tests
   */
  async group(name: string, group: (group: TestGroup) => void): Promise<void> {
    const gp = new TestGroup(name);
    this._groups.push(gp);
    try {
      await group(gp);
    } catch (e) {}
  }

  /**
   *
   * Creates a group and executes an assertion in one line
   *
   * @param name - Name of the group and assertion
   * @param assertion
   */
  do<T>(name: string, assertion: T extends Assertion<T> ? T : never): void {
    const group = new TestGroup(name).do(name, assertion);
    this._groups.push(group);
  }

  /**
   *
   * Skips assertion or assertion group result
   *
   * @param name - Name of the group
   * @param skip - Skipped action
   */
  public skip<T>(name: string, skip: Assertion<T> | ((group: TestGroup) => void)): void {}
}

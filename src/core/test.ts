import { TestGroup } from './index';

export class Test {
  static get groups(): TestGroup[] {
    return this._groups;
  }

  private static _groups: TestGroup[] = [];
  static group(description: string): TestGroup {
    const group = new TestGroup(description);
    this._groups.push(group);
    return group;
  }
}

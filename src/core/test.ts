import { groupDescriptionSymbol, groupResultsSymbol, testGroupsSymbol } from './symbols';
import { ProposedTest } from './proposed-test';

export class Test {
  private static _proposedTests: ProposedTest[] = [];

  /**
   *
   * Initializes the test suite
   *
   * @param proposedTest - Callback to execute tests
   */
  static init(proposedTest: (test: ProposedTest) => any): void {
    const test = new ProposedTest();
    this._proposedTests.push(test);
    proposedTest(test);

    for (const test of this._proposedTests) {
      for (const group of test[testGroupsSymbol]) {
        console.log(group[groupDescriptionSymbol]);
        for (const result of group[groupResultsSymbol]) {
          console.log({
            description: result.description,
            result: result.result,
          });
        }
        console.log('-------------------------------------');
      }
    }
    // TODO(David): PRINT RESULTS HERE
  }
}

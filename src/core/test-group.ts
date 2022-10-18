import { Assertion } from '../assertions/index';
import { EndedTest } from '../types/test-result.type';

export class TestGroup {
  private _results: EndedTest[] = [];

  get description(): string {
    return this._description;
  }

  get results(): EndedTest[] {
    return this._results;
  }

  constructor(private readonly _description: string) {}

  do<T>(
    testCaseDescription: string,
    assertion: T extends Assertion<T> ? T : never,
  ): this {
    this._results.push({
      description: testCaseDescription,
      result: assertion.assert(),
    });
    return this;
  }
}

import {
  assertDeepEqual,
  assertEquals,
  assertGreater,
  assertLesser,
  assertNotEquals,
} from './core/index';
import { Test } from './core/test';

Test.init((test) => {
  test.group('Group 1', (group) => {
    group
      .do('not equals- OK', assertNotEquals(1, 2))
      .do('not equals- KO', assertNotEquals(1, 1))
      .do('group 1 assertion 1', assertEquals({}, {}))
      .do('1 should be grater than 2', assertGreater(2, 1))
      .do('1 should be lesser than 2', assertLesser(2, 2))
      .do('Objects should be equal', assertDeepEqual({ number: 2 }, { number: 1 }))
      .do('Arrays should be equal', assertDeepEqual([1, 2, 3], [1, 2, 3]))
      .do('Arrays should not be equal', assertDeepEqual([1, 2], [1, 2, 3]))
      .do('Objects should not be equal', assertEquals({ number: 2 }, { number: 2 }));
  });
});

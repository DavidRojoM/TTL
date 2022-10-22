import {
  assertDeepEqual,
  assertEquals,
  assertGreater,
  assertLesser,
  assertNotEquals,
} from './core/index';
import { Test } from './core/test';

Test.init(async (test) => {
  test.group('Synchronous group', (group) => {
    group
      .do('not equals- OK', assertNotEquals(1, 2))
      .do('not equals- KO', assertNotEquals(1, 2))
      .do('group 1 assertion 1', assertEquals({}, {}))
      .do('1 should be grater than 2', assertGreater(2, 3))
      .do('1 should be lesser than 2', assertLesser(2, 1))
      .do('Objects should be equal', assertDeepEqual({ number: 2 }, { number: 2 }))
      .do('Arrays should be equal', assertDeepEqual([1, 2, 3], [1, 2, 3]))
      .do('Objects should not be equal', assertDeepEqual({ number: 3 }, { number: 2 }))
      .do('Arrays should not be equal', assertDeepEqual([1, 2], [1, 2, 3]));
  });

  test.group('Asynchronous group', async (group) => {
    const val = await Promise.resolve(1);
    group.do('val should be equal to 1', assertEquals(1, val));
  });

  // TODO: handle rejected promises
  // test.do('async oneliner', assertEquals(2, await Promise.reject(2)));
});

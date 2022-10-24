import {
  assertDeepEqual,
  assertEquals,
  assertGreater,
  assertLesser,
  assertNotEquals,
  assertThrows,
} from './core/index';
import { Test } from './core/test';

class BaseException extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class TestException extends BaseException {
  constructor(message: string) {
    super(message);
  }
}

Test.init(async (test) => {
  test.group('SYNC - assertNotEquals', (gp) => {
    gp.do('not equals(1,2) - OK', assertNotEquals(1, 2))
      .do('not equals(1,1) - KO', assertNotEquals(1, 1))
      .do('not equals (1,0) - KO', assertNotEquals(1, 0));
  });

  test.group('SYNC - assertDeepEqual', (group) => {
    group
      .do('Objects should be equal - OK', assertDeepEqual({ number: 2 }, { number: 2 }))
      .do('Arrays should be equal - OK', assertDeepEqual([1, 2, 3], [1, 2, 3]))
      .do(
        'Objects should not be equal - KO',
        assertDeepEqual({ number: 3 }, { number: 2 }),
      )
      .do('Arrays should not be equal - KO', assertDeepEqual([1, 2], [1, 2, 3]));
  });

  test.group('SYNC - assertEquals', (group) => {
    group.do('Objects shouldnt be equal - KO', assertEquals({}, {}));
    group.do('(1,1) should be equal - OK', assertEquals(1, 1));
    group.do('(1,2) shouldnt be equal - KO', assertEquals(1, 2));
  });

  test.group('SYNC - assertGreater', (gp) => {
    gp.do('3 should be grater than 2 - OK', assertGreater(2, 3))
      .do('1 shouldnt be grater than 2 - KO', assertGreater(2, 1))
      .do('1 shouldnt be grater than 1 - KO', assertGreater(1, 1));
  });

  test.group('SYNC - assertLesser', (group) => {
    group
      .do('1 should be lesser than 2 - OK', assertLesser(2, 1))
      .do('3 shouldnt be lesser than 2 - KO', assertLesser(2, 3))
      .do('1 shouldnt be lesser than 1 - KO', assertLesser(1, 1));
  });

  test.group('SYNC - assertThrows', (gp) => {
    gp.do('throws 1 - OK', assertThrows(throwTestFn1, 1))
      .do(
        'throws extending BaseException - OK',
        assertThrows(throwTestFn2, BaseException),
      )
      .do('throws same Exception - OK', assertThrows(throwTestFn2, TestException))
      .do('throws different Exception - KO', assertThrows(throwTestFn1, Error));
  });

  await test.group('ASYNC - assertEquals', async (group) => {
    const val = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
    group.do('Resolved Promise 1 should be equal to 1 - OK', assertEquals(1, val));
  });

  // TODO: handle rejected promises
  // test.do('async oneliner', assertEquals(2, await Promise.reject(2)));
});

function throwTestFn1(): void {
  throw 1;
}

function throwTestFn2(): void {
  throw new TestException('asd');
}

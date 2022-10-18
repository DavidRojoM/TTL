import { assertEquals, Test } from './core/index';

Test.group('Test Group')
  .do('should fail', assertEquals(1, 2))
  .do('should success', assertEquals(1, 1))
  .do('should fail', assertEquals(1, {} as number));

for (const group of Test.groups) {
  console.log(group.description);
  for (const result of group.results) {
    console.log({
      description: result.description,
      result: result.result,
    });
  }
  console.log('-------------------------------------');
}

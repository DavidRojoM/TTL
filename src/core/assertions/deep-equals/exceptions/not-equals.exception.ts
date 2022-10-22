import { DomainException } from '../../../../shared-kernel/index';

export class NotEqualsException<T> extends DomainException {
  constructor(config: { expected: T; actual: T }) {
    super(`Expected ${config.expected} but got ${config.actual}`);
  }
}

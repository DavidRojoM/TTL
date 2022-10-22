import { DomainException } from '../../../../shared-kernel/index';

export class NotGreaterException<T> extends DomainException {
  constructor(config: { greaterThan: T; actual: T }) {
    super(`${config.actual} is not greater than ${config.greaterThan}`);
  }
}

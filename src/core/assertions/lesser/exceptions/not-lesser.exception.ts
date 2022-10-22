import { DomainException } from '../../../../shared-kernel/index';

export class NotLesserException<T> extends DomainException {
  constructor(config: { lesserThan: T; actual: T }) {
    super(`${config.actual} is not lesser than ${config.lesserThan}`);
  }
}

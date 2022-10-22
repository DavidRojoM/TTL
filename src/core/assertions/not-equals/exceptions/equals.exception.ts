import { DomainException } from '../../../../shared-kernel/index';

export class EqualsException extends DomainException {
  constructor(config: { notEqualTo: unknown; actual: unknown }) {
    super(
      `Expected actual value not to be equal to ${config.notEqualTo}, but it was ${config.actual}`,
    );
  }
}

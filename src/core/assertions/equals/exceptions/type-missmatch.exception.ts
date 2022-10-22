import { DomainException } from '../../../../shared-kernel/index';

export class TypeMissmatchException extends DomainException {
  constructor(config: { typeOfExpected: unknown; typeOfActual: unknown }) {
    super(
      `Type of expected value differ from type of actual value. Expected value type : ${config.typeOfExpected}, actual value type: ${config.typeOfActual}`,
    );
  }
}

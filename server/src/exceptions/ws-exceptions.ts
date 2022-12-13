import { WsException } from '@nestjs/websockets';

type WsExeptionType = 'BadRequest' | 'Unauthorized' | 'Unknown';

export class WsTypeException extends WsException {
  readonly type: WsExeptionType;

  constructor(type: WsExeptionType, message: string | unknown) {
    const error = {
      type,
      message,
    };
    super(error);
    this.type = type;
  }
}

export class WsBadRequestException extends WsTypeException {
  constructor(message: string | unknown) {
    super('BadRequest', message);
  }
}

export class WsUnauthorizedException extends WsTypeException {
  constructor(message: string | unknown) {
    super('Unauthorized', message);
  }
}

export class WsUnknownException extends WsTypeException {
  constructor(message: string | unknown) {
    super('Unknown', message);
  }
}

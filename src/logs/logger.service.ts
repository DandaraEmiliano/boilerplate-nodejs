import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class LoggerService extends Logger {

  logInfo(message: string) {
    this.log(message, "INFO");
  }

  logError(message: string, trace: string) {
    this.error(message, trace, "ERROR");
  }

  logWarn(message: string) {
    this.warn(message, "WARNING");
  }
}

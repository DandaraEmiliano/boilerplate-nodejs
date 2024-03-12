import { Injectable } from "@nestjs/common";
import * as dotenv from "dotenv";
import * as fs from "fs";

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    this.validateConfig();
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  private validateConfig() {
    if (!this.envConfig.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the configuration.");
    }
  }
}

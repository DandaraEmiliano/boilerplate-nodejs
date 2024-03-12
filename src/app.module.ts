import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./services/app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { LoggerService } from "./logs/logger.service";
import { ConfigModule } from "./config/config.module";
import { ConfigService } from "./config/config.service";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || "mongodb://localhost/nestjs_boilerplate"
    ), 
    AuthModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService, ConfigService],
})
export class AppModule {}

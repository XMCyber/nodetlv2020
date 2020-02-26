import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { ImagesController } from './images/images.controller';

@Module({
  imports: [
    MorganModule.forRoot()
  ],
  controllers: [
    LoginController,
    ImagesController
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('short'),
    },
    AppService,
    LoginService
  ],
})
export class AppModule { }

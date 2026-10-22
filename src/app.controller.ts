import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.debug('hello world minh la le cong hien xin chao nha haha');
    this.logger.debug('hello world jenkins');
    this.logger.debug('hello world jenkins');
    return this.appService.getHello();
  }
}

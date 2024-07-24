import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  health() {
    return true;
  }

  @Get('version')
  async getVersion(): Promise<string> {
    return this.appService.getVersion();
  }
}

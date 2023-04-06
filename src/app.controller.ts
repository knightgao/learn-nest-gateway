import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: 'user',
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  // http://localhost:3000/v1/user 或者 http://localhost:3000/user
  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  findAll() {
    return this.appService.getHello();
  }

  // http://localhost:3000/v2/user
  @Get()
  @Version('2')
  findAll2() {
    return 'i am new one';
  }
}

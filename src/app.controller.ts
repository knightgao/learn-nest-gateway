import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from 'src/common/exceptions/business.exception';

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

  // 业务错误的场景  http://localhost:3000/user/findBusinessError
  @Get('findBusinessError')
  @Version([VERSION_NEUTRAL, '1'])
  findBusinessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('你这个参数错了');
    }
    return null;
  }
}

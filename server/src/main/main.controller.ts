import { Get, Controller } from '@nestjs/common';

@Controller('/')
export class MainController {

  @Get('/')
  async root() {
    return 'Hi';
  }
}

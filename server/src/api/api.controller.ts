import { Get, Controller } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('/api')
export class ApiController {
  constructor(private readonly apiSvc: ApiService) { }

  @Get('/all')
  async root() {
    return await this.apiSvc.all();
  }
}

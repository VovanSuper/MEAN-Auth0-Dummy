import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ApiModule } from './api.module';
import { AppModule } from '../app.module';

describe('AppController', () => {
  let app: TestingModule;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      // providers: [ApiService]
      imports: [
        AppModule,
        ApiModule
      ]
    }).compile();
  });

  // describe('api service', () => {

  it('should return all data from database', async () => {
    const svc = app.get<ApiService>(ApiService);
    let data = await svc.all();

    console.log(data)

    expect(data).toBeTruthy();

  });

  // });
});

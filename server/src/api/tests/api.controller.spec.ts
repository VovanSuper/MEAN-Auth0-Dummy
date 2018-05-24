import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ApiController]
      // , providers: [ApiService]
    }).compile();
  });

  // describe('root', () => {

  it('should be truthy"', () => {
    const apiController = app.get<ApiController>(ApiController);

    expect(apiController.root()).toBeTruthy();
  });

  // });
});

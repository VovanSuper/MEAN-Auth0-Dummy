import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { opts } from '../../data/helpers/conn.opts';
import { Story } from '../../data/entity/Story';

@Module({
  imports: [
    TypeOrmModule.forFeature([Story])
  ],
  providers: [ApiService],
  controllers: [ApiController]
})
export class ApiModule { }

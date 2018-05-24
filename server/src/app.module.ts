import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { opts } from '../data/helpers/conn.opts';
import { ApiModule } from './api/api.module';
// import { MainModule } from './main/main.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(opts),
    // MainModule,
    ApiModule
  ]
})
export class AppModule { }

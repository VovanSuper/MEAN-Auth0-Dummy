import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true, cors: true, logger: true });
  await app.listen(3000);
}

bootstrap()
  .then(() => {
    console.log('Bootstraped server...');
  })
  .catch(err => console.error(err));

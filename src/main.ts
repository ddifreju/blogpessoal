import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal da Juliana Freddi')
  .setDescription('Projeto Blog Pessoal feito como atividade prática para o Bootcamp Generation')
  .setContact("Juliana Freddi",
    "https://github.com/ddifreju",
    "juhfreddi@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'
  app.useGlobalPipes (new ValidationPipe());
  app.enableCors();
  await app.listen(process.env. PORT ?? 4000);
}
bootstrap();
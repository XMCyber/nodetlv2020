import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initUsernamePassword } from './login/username-password-initializer';

function _logError(err) {
  console.error("EXCEPTION:", err && err.stack || err);
}

process.on('uncaughtException', _logError);
process.on('unhandledRejection', _logError);

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await initUsernamePassword();
  await app.listen(80);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);

  const io = new Server(3002);

  io.on('connection', (socket) => {
    console.log('New client connected');
    socket.emit('connection', null);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    socket.on('string', (data, callback) => {
      console.log(data);

      callback('Message received');
    });

    socket.on('object', (data, callback) => {
      console.log(data);

      callback({
        message: 'Message received',
      });
    });
  });
}
bootstrap();

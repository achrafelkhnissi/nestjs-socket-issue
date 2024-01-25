import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';

@WebSocketGateway({
  namespace: 'chat',
  cors: true,
})
export class ChatGateway {
  @SubscribeMessage('string')
  handleMessage(): string {
    return 'Hello World!';
  }

  @SubscribeMessage('object')
  handleObject(): WsResponse<string> {
    return {
      event: 'object',
      data: 'Hello World!',
    };
  }
}

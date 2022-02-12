import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('ACA LLEGO LA MAGIA ');
    return 'Hello World!';
  }
}

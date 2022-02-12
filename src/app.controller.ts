import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private mailService: MailService,
  ) {}

  @Get('email-read/:email')
  getEmail(@Param('id') email: string): string {
    console.log('ACA LEI EL MAIL PAPU DE ', email);
    return this.appService.getHello();
  }

  @Post('send-email')
  sendEmail(@Body() payload: any) {
    console.log('ACA LE voy a mandar EL MAIL PAPU DE ', payload.email);

    return this.mailService.sendEmail(payload.email);
  }
}

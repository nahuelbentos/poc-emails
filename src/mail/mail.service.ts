import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(email: string) {
    const url = `http://localhost:4000/email-read/${email}`;

    await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice Appsss! Confirm your Email',
      template: 'confirmation', // `.hbs` extension is appended automatically
      context: {
        name: email,
        url,
      },
    });
  }
}

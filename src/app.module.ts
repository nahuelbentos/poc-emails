import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'server487.dinamichosting.com',
          secure: false,
          auth: {
            user: 'infosistemas@acu.com.uy',
            pass: 'InfoSistemas.1234',
          },
        },
        defaults: {
          from: '"Nahuel Test" <infosistemas@acu.com.uy>',
        },
        template: {
          dir: __dirname + '/mail/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}

import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ec94ff1f07d1d9",
    pass: "4175690af55f47"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
  
    await transport.sendMail({
      from: 'Equipe Feedget <oi.@feedget.com>',
      to: 'Marcos Paulo <mprogramador.10@gmail.com>',
      subject,
      html: body,
    })
  };
}
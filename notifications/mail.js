const nodemailer = require("nodemailer");

const config = require("../config");
const logger = require("../log/winston");

class MailSender {
  constructor() {
    // create reusable transporter object using the default SMTP transport
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.mail.GMAIL_ADDRESS,
        pass: config.mail.GMAIL_PWD
      }
    });
  }

  async send(template, email, firstName) {
    const mailOptions = {
      from: "<no-reply@ecoderce.com>",
      to: email, // list of receivers
      subject: `Nuevo pedido de ${firstName}, ${email}`, // Subject line
      text: "Pedido realizado con exito", // plain text body
      html: template // html body
    };
    const response = await this.transporter.sendMail(mailOptions);
    logger.info("Mail enviado, id:" + response.messageId);
  }

  async aNewUserMail(template) {
    const mailOptions = {
      to: config.mail.GMAIL_ADDRESS, // list of receivers
      subject: `Nuevo usuario registrado`, // Subject line
      html: template // html body
    };
    const response = await this.transporter.aNewUserMail(mailOptions);
    console.log("RESPUESTA MAIL:\n ", response);
  }
}

module.exports = new MailSender();

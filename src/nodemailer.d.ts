declare module 'nodemailer' {
  export function createTransporter(options: any): any;
  export function sendMail(options: any): Promise<any>;
}
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import nodemailer from 'nodemailer';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Middleware to parse JSON bodies
  server.use(express.json());

  // API endpoint for contact form submissions
  server.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }

      // For now, we'll just log the message and return success
      // In a real implementation, you would configure nodemailer with your email service
      console.log('Contact Form Submission:', { name, email, subject, message });
      
      // Simulate email sending
      // In a real application, you would uncomment the following code:
      /*
      // Create transporter (you'll need to configure this with your email service)
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: 'soufyanfellat03@gmail.com',
          pass: 'YOUR_APP_PASSWORD' // You'll need to generate an app password
        }
      });

      // Email content
      const mailOptions = {
        from: email,
        to: 'soufyanfellat03@gmail.com',
        subject: subject || `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      // Send email
      await transporter.sendMail(mailOptions);
      */

      res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully!' 
      });
      
      // Return to satisfy TypeScript
      return;
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
      
      // Return to satisfy TypeScript
      return;
    }
  });

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
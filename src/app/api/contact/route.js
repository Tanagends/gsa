import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { debug } from 'console';

export async function POST(req) {
  const { name, email, message } = await req.json();
  
  if(!name || !email || !message){
    return NextResponse.json({message:'All fields are required'}, {status: 400})
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    debug: true,
    logger: true,
  });

  // HTML email template with website colors
  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Roboto', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
            }
            
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
                overflow: hidden;
            }
            
            .header {
                background: linear-gradient(135deg, #13d4f7 0%, #0b6b7c 100%);
                color: white;
                padding: 30px 20px;
                text-align: center;
            }
            
            .header h1 {
                font-size: 28px;
                margin-bottom: 10px;
                font-weight: 700;
            }
            
            .header p {
                font-size: 16px;
                opacity: 0.9;
            }
            
            .content {
                padding: 30px 25px;
            }
            
            .form-field {
                margin-bottom: 25px;
                border-left: 4px solid #FFCC00;
                padding-left: 15px;
            }
            
            .form-field label {
                display: block;
                font-weight: 600;
                color: #0b6b7c;
                margin-bottom: 8px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .form-field .value {
                font-size: 16px;
                color: #333;
                background-color: #f8f9fa;
                padding: 12px;
                border-radius: 5px;
                border: 1px solid #e9ecef;
            }
            
            .message-field {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #9A0000;
                margin: 20px 0;
            }
            
            .message-field label {
                display: block;
                font-weight: 600;
                color: #9A0000;
                margin-bottom: 10px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .message-content {
                font-size: 16px;
                line-height: 1.8;
                color: #333;
                white-space: pre-wrap;
            }
            
            .footer {
                background-color: #063841;
                color: white;
                padding: 20px;
                text-align: center;
                font-size: 14px;
            }
            
            .timestamp {
                background-color: #e3f2fd;
                padding: 15px;
                text-align: center;
                color: #0b6b7c;
                font-size: 14px;
                font-weight: 500;
            }
            
            .divider {
                height: 3px;
                background: linear-gradient(90deg, #FFCC00 0%, #13d4f7 50%, #9A0000 100%);
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>📧 New Contact Form Submission</h1>
                <p>Someone has reached out through your website</p>
            </div>
            
            <div class="timestamp">
                Received on ${new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </div>
            
            <div class="content">
                <div class="form-field">
                    <label>👤 Full Name</label>
                    <div class="value">${name}</div>
                </div>
                
                <div class="form-field">
                    <label>📧 Email Address</label>
                    <div class="value">${email}</div>
                </div>
                
                <div class="divider"></div>
                
                <div class="message-field">
                    <label>💬 Message</label>
                    <div class="message-content">${message}</div>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>GSA Contact Form</strong></p>
                <p>This email was automatically generated from your website contact form.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  // Validate environment variables
  const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
  const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER || 'secretary@gsa.co.zw';
  
  console.log('Email config:', {
    from: fromEmail,
    to: toEmail,
    smtpUser: process.env.SMTP_USER,
    hasFromEmail: !!process.env.FROM_EMAIL,
    hasToEmail: !!process.env.TO_EMAIL
  });

  if (!fromEmail || !toEmail) {
    console.error('Missing email configuration');
    return NextResponse.json({ error: 'Email configuration error' }, { status: 500 });
  }

  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: `🔔 New Contact Form Submission from ${name}`,
    html: htmlTemplate,
    text: `New contact form submission:
    
Name: ${name}
Email: ${email}
Message: ${message}

Sent on: ${new Date().toLocaleString()}`,
  };

  try {
    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });
    
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email. Please try again.' }, { status: 500 });
  }
}

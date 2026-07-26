import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Standard setup for gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your own email to receive messages
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'New Message from ' + name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background: #f9f9f9;">
          <h2 style="color: #ff7a00;">New Contact Message from ${name}</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #ff7a00; background: #fff;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

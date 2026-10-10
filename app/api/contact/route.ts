import { NextResponse } from 'next/server';
import { Resend } from 'resend';

async function sendLeadEmail({
  name,
  email,
  service,
  message,
}: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
    to: process.env.EMAIL_TO || 'arsalanbotawala256@gmail.com',
    subject: `New Lead: ${name} - ${service}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Service:</b> ${service}</p>
      <p><b>Message:</b><br/>${message}</p>
      <hr/>
      <p>Time: ${new Date().toString()}</p>
    `,
  });

  return true;
}

async function saveLeadLocally({
  name,
  email,
  service,
  message,
}: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  try {
    const fs = await import('fs');
    const path = await import('path');
    const dir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(
      path.join(dir, 'contacts.json'),
      `${JSON.stringify({ name, email, service, message, time: new Date().toISOString() })}\n`,
    );
  } catch (error) {
    console.error('Failed to save contact form locally:', error);
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const emailSent = await sendLeadEmail({ name, email, service, message });
    await saveLeadLocally({ name, email, service, message });

    return NextResponse.json({
      success: true,
      emailSent,
      mode: emailSent ? 'email' : 'local-backup',
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json({ success: false, error: 'Email failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Email backend ready' });
}
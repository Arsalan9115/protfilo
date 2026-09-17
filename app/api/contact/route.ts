import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    // 1. Email bhejo tere inbox pe
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
      `
    });

    // 2. Backup local file me bhi save (optional)
    try {
      const fs = await import('fs');
      const path = await import('path');
      const dir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.appendFileSync(path.join(dir, 'contacts.json'), JSON.stringify({ name, email, service, message, time: new Date().toISOString() }) + '\n');
    } catch {}

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Email failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Email backend ready' });
}
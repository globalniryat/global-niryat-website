import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import raw from '@/data/site.json';

const resend   = new Resend(process.env.RESEND_API_KEY);
// On free plan, RESEND_TO must be the email you signed up with on resend.com
const TO_EMAIL = process.env.RESEND_TO ?? raw.contact.email;
const FROM     = process.env.RESEND_FROM ?? 'onboarding@resend.dev';

// NOTE: Resend free plan —
//   • FROM must be "onboarding@resend.dev"
//   • TO   must be the email you used to register at resend.com
//   To send to any address, verify your domain at resend.com/domains
//   then set: RESEND_FROM=Global Niryat <contact@globalniryat.com>

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from:     FROM,
      to:       TO_EMAIL,
      replyTo:  email,          // clicking "Reply" goes back to the sender
      subject:  `New Inquiry from ${name} — Global Niryat Website`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px;">
          <div style="background:linear-gradient(135deg,#2359A4,#4A7FD6);padding:24px;border-radius:8px 8px 0 0;margin-bottom:0;">
            <h1 style="color:white;margin:0;font-size:20px;font-weight:700;">New Inquiry — Global Niryat</h1>
          </div>
          <div style="background:white;padding:28px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;border-top:none;">

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;width:120px;font-weight:600;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <a href="mailto:${email}" style="color:#2359A4;text-decoration:none;font-size:14px;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="background:#F58A1F22;color:#F58A1F;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:600;">${service || 'Not specified'}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top:20px;">
              <p style="color:#6b7280;font-size:13px;font-weight:600;margin-bottom:8px;">Message</p>
              <div style="background:#f9fafb;border-radius:8px;padding:16px;color:#111827;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</div>
            </div>

            <div style="margin-top:24px;padding-top:20px;border-top:1px solid #f3f4f6;">
              <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#2359A4,#4A7FD6);color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
                Reply to ${name} →
              </a>
            </div>
          </div>
          <p style="text-align:center;color:#9ca3af;font-size:11px;margin-top:16px;">
            Sent via Global Niryat contact form · globalniryat.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[Resend error]', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('[Contact API error]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

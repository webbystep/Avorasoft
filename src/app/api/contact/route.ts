import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Név, e-mail és üzenet megadása kötelező.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'A levélküldő szolgáltatás nincs konfigurálva.' },
        { status: 500 },
      );
    }
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Avorasoft <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@avorasoft.hu',
      subject: `Új megkeresés: ${name}${company ? ` (${company})` : ''}`,
      html: `
        <h2>Új megkeresés az Avorasoft weboldalról</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${company ? `<p><strong>Cégnév:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Üzenet:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Hiba történt az üzenet küldése közben.' },
      { status: 500 },
    );
  }
}

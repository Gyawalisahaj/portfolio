import { Resend } from "resend";

interface ContactNotificationInput {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
}

/**
 * Sends an email alert when a new contact message arrives.
 * Designed to fail soft: if RESEND_API_KEY isn't configured, or the send fails,
 * we log it and move on rather than throwing — the message is already safely
 * saved in the database by the time this runs, so a flaky email provider
 * should never make the contact form appear broken to a visitor.
 */
export async function sendContactNotification(input: ContactNotificationInput): Promise<{ sent: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    console.warn(
      "[email] RESEND_API_KEY or CONTACT_EMAIL_TO not set — skipping email alert (message was still saved)."
    );
    return { sent: false };
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_EMAIL_FROM || "Portfolio <onboarding@resend.dev>";

    await resend.emails.send({
      from,
      to,
      replyTo: input.email,
      subject: `New portfolio message from ${input.name}`,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        input.phone ? `Phone: ${input.phone}` : null,
        "",
        input.message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #1B1B17;">
          <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
          ${input.phone ? `<p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>` : ""}
          <p style="white-space: pre-wrap; margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e5e5;">${escapeHtml(
            input.message
          )}</p>
        </div>
      `,
    });

    return { sent: true };
  } catch (error) {
    console.error("[email] Failed to send contact notification:", error);
    return { sent: false };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

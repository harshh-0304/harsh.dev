import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

// DSA: Single-pass character sanitization using a Hash Map lookup table O(L)
const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
};
const escapeHtml = (str: string) => str.replace(/[&<>"']/g, (m) => ESCAPE_MAP[m] ?? m);

const jsonResponse = (data: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey =
      import.meta.env.RESEND_API_KEY ||
      import.meta.env.Resend_api_keys ||
      process.env.RESEND_API_KEY ||
      process.env.Resend_api_keys;

    if (!apiKey) {
      return jsonResponse({ error: "Resend API key is not configured." }, 500);
    }

    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return jsonResponse({ error: "Please fill in all fields (name, email, message)." }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: "Please enter a valid email address." }, 400);
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["bakasakuta33@gmail.com"],
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin-bottom: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">New Contact Message from Portfolio</h2>
          
          <div style="margin-bottom: 16px;">
            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">From</p>
            <p style="margin: 0; font-size: 15px; font-weight: 600; color: #0f172a;">${escapeHtml(name)} &lt;<a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a>&gt;</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Message</p>
            <div style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; background-color: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">${escapeHtml(message)}</div>
          </div>

          <p style="margin: 0; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            Hit <strong>Reply</strong> to respond directly to ${escapeHtml(name)}.
          </p>
        </div>
      `,
    });

    if (error) {
      return jsonResponse({ error: error.message }, 500);
    }

    return jsonResponse({ success: true, id: data?.id });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to send message.";
    return jsonResponse({ error: errorMsg }, 500);
  }
};

import {
    CONTACT_FORM_RECEIVER_MAIL,
    CONTACT_FORM_RECEIVER_NAME,
    CONTACT_FORM_SENDER_MAIL,
    CONTACT_FORM_SENDER_NAME,
} from '$env/static/private';
import { parseRequestBody } from '$lib/api';
import { sendMail } from '$lib/mail';
import { addContactToAudience } from '$lib/mailchimp';
import { json } from '@sveltejs/kit';
import { z } from 'zod';
import type { RequestHandler } from './$types';

const RequestBodySchema = z.object({
    name: z.string().trim().min(1),
    email: z.string().email().trim(),
    subject: z.string().trim().min(1),
    message: z.string().trim().min(1),
    newsletter: z.boolean(),
});
export type RequestBody = z.infer<typeof RequestBodySchema>;

const handleNewsletterCreation = async (newsletter: boolean, email: string) => {
    if (!newsletter) {
        return 'nicht abonniert';
    }

    const success = await addContactToAudience(email);

    return success ? 'abbonniert' : 'Abonnieren fehlgeschlagen';
};

export const POST: RequestHandler = async ({ request }) => {
    return await parseRequestBody(request, RequestBodySchema, async (body) => {
        const newsletterResult = await handleNewsletterCreation(body.newsletter, body.email);

        const emailText = `Name: ${body.name}\nNewsletter: ${newsletterResult}\n\n${body.message}`;

        const success = await sendMail({
            from: { name: CONTACT_FORM_SENDER_NAME, address: CONTACT_FORM_SENDER_MAIL },
            to: { name: CONTACT_FORM_RECEIVER_NAME, address: CONTACT_FORM_RECEIVER_MAIL },
            replyTo: { name: body.name, address: body.email },
            subject: `Kontaktformular: ${body.subject}`,
            text: emailText,
        });

        if (success) {
            return json({ success: true });
        }

        return json({ success: false }, { status: 500 });
    });
};

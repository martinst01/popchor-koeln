import { parseRequestBody } from '$lib/api';
import { addContactToAudience } from '$lib/mailchimp';
import { json } from '@sveltejs/kit';
import { z } from 'zod';
import type { RequestHandler } from './$types';

const RequestBodySchema = z.object({
    email: z.string().email().trim(),
    acceptTerms: z.literal(true),
});
export type RequestBody = z.infer<typeof RequestBodySchema>;

export const POST: RequestHandler = async ({ request }) => {
    return await parseRequestBody(request, RequestBodySchema, async (body) => {
        const result = await addContactToAudience(body.email);

        switch (result) {
            case 'success':
                return json({ success: true });
            case 'email-exists-already':
                return json({ success: false, emailExistsAlready: true }, { status: 400 });
            case 'error':
                return json({ success: false }, { status: 500 });
        }
    });
};

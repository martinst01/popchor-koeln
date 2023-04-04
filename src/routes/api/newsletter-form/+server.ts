import { parseRequestBody } from '$lib/api';
import { subscribeToNewsletter } from '$lib/newsletter';
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
        const success = await subscribeToNewsletter(body.email);

        if (success) {
            return json({ success: true });
        }

        return json({ success: false }, { status: 500 });
    });
};

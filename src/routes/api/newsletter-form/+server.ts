import { parseRequestBody } from '$lib/api';
import { json } from '@sveltejs/kit';
import { z } from 'zod';
import type { RequestHandler } from './$types';

const RequestBodySchema = z.object({
    email: z.string().email().trim(),
    acceptTerms: z.literal(true),
});
export type RequestBody = z.infer<typeof RequestBodySchema>;

export const POST: RequestHandler = async ({ request }) => {
    return await parseRequestBody(request, RequestBodySchema, (body) => {
        console.log(body);

        return json({ success: true });
    });
};

import { json } from '@sveltejs/kit';
import type { ZodType } from 'zod';

export const parseRequestBody = async <T>(
    request: Request,
    schema: ZodType<T>,
    handler: (data: T) => Promise<Response>,
) => {
    const bodyRaw = await request.json();

    const result = schema.safeParse(bodyRaw);
    if (!result.success) {
        return json({ validationErrors: result.error.issues }, { status: 400 });
    }

    return await handler(result.data);
};

export const sendToApi = async <T>(url: string, body: T) => {
    const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw response;
    }
};

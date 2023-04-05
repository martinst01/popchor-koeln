import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
    if (url.host === 'popchor-koeln.de' && url.pathname !== '/maintenance' && url.pathname !== '/robots.txt') {
        throw redirect(307, '/maintenance');
    }

    return {};
}) satisfies LayoutServerLoad;

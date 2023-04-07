import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
    return {
        showMaintenance: url.host === 'www.popchor-koeln.de' || url.host === 'popchor-koeln.de',
    };
}) satisfies LayoutServerLoad;

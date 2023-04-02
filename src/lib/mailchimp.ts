import { MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, MAILCHIMP_SERVER_PREFIX } from '$env/static/private';

const apiPost = async (url: string, body: Record<string, string>) => {
    const response = await fetch(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0${url}`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw response;
    }
};

type AddContactResult = 'success' | 'email-exists-already' | 'error';

export const addContactToAudience = async (email: string): Promise<AddContactResult> => {
    try {
        await apiPost(`/lists/${MAILCHIMP_AUDIENCE_ID}/members`, {
            email_address: email,
            status: 'subscribed',
        });

        console.info('contact successfully added to audience.');

        return 'success';
    } catch (e) {
        if (e instanceof Response) {
            const json = await e.json();

            if (e.status === 400 && json.title === 'Member Exists') {
                return 'email-exists-already';
            }

            console.warn('addContactToAudience failed with 400.', json, e);
        } else {
            console.error('addContactToAudience failed.', e);
        }
    }

    return 'error';
};

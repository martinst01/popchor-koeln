export type FormStatus = 'ready' | 'loading' | 'success' | 'error';

export type Gig = {
    title: string;
    time: string;
    place: string[];
    price?: string;
    description: string;
    link?: string;
    linkText?: string;
    entryTime?: string;
};

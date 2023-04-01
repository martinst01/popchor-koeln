const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        fontFamily: {
            sans: ['Open Sans'],
        },
        extend: {
            screens: {
                xs: '480px',
            },
            colors: {
                accent: '#FF6666',
            },
        },
    },

    plugins: [],
};

module.exports = config;

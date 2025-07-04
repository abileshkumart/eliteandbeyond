const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['var(--font-inter)', ...fontFamily.sans],
                heading: ['var(--font-playfair)', ...fontFamily.serif],
            },
        },
    },
    plugins: [],
};

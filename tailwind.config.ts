const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['var(--font-open-sans)', ...fontFamily.sans],
                heading: ['var(--font-playfair)', ...fontFamily.serif],
            },
            colors: {
                // Primary Green Palette - Forest/Nature theme
                'forest': {
                    900: '#071810',  // Darkest - footer
                    800: '#0A2218',  // Very dark - header
                    700: '#0E2C19',  // Dark - hero, contact
                    600: '#123822',  // Medium dark
                    500: '#16442B',  // Medium - about
                    400: '#1B5035',  // Medium light - process cards
                    300: '#1F5C3E',  // Light accent
                },
                // Accent Gold Palette
                'gold': {
                    500: '#E8B84D',  // Dark gold for hover
                    400: '#F5C76A',  // Primary gold
                    300: '#F7D488',  // Light gold
                    200: '#F9E1A6',  // Lighter gold
                    100: '#FBF0D3',  // Very light gold/cream
                },
                // Legacy support
                'primary-dark': '#0E2C19',
                'primary-green': '#16442B',
                'accent-gold': '#F5C76A',
                'accent-cream': '#FBF0D3',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-gold': 'pulse-gold 2s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-gold': {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 199, 106, 0.4)' },
                    '50%': { boxShadow: '0 0 0 15px rgba(245, 199, 106, 0)' },
                },
            },
        },
    },
    plugins: [],
};

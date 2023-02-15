/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            backgroundColor: {
                project_tile: 'rgba(74,94,102,0.15)',
                project_tile_hover: 'rgba(74,94,102,0.25)'
            },
            fontFamily: {
                sans: ['Inter var', ...fontFamily.sans],
                gilroy: ['Gilroy-Bold', 'sans-serif'],
                sourse_sans_pro: ['Source Sans Pro', 'sans-serif']
            },
            animation: {
                smooth_energy_1s: 'wiggle 0.5s ease',
                smooth_down_1s: 'wiggleDown 0.3s ease'
            },
            keyframes: {
                wiggle: {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                wiggleDown: {
                    from: { opacity: '1' },
                    to: { opacity: '0' }
                }
            }
        },
    },
    plugins: [
        require('autoprefixer'),
        require('@tailwindcss/forms'),
    ]
}

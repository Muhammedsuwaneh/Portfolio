/** @type {import('next').NextConfig} */
const defaultTheme = require('tailwindcss/defaultTheme')

const nextConfig = {
    theme: {
        extend: {
          fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          },
        },
    },
}

module.exports = nextConfig

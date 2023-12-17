import baseTailwindConfig from '../../tailwind.config.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseTailwindConfig,
  content: [
    "./src/**/*.{html,ts}",
  ],
}

let lodash = require('lodash');

const spacingStep = 2;

const spacings = lodash.concat([0, 0.5], lodash.range(1, 45)).reduce((accumulator, value) => {
  const spacing = spacingStep * value;
  accumulator[spacing] = `${spacing}px`;

  return accumulator;
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: {
        DEFAULT: 'rgba(0, 43, 88, 0.036)',
        'shade-1': 'rgba(0, 43, 88, 0.0707)',
        'shade-2': 'rgba(0, 43, 88, 0.1042)',
        dark: '#181E25',
        'dark-shade-1': 'rgba(36, 48, 61, 0.7)',
        'dark-shade-2': 'rgba(36, 48, 61, 1)',
        'dark-grey-shade-1': 'rgba(61, 76, 91, 0.3)',
        'dark-grey-shade-2': 'rgba(61, 76, 91, 0.4)',
      },
      primary: {
        disabled: '#14384f73',
        light: '#14384f99',
        DEFAULT: '#182634',
        dark: '#182634',
      },
      accent: {
        light: '#409CFF',
        DEFAULT: '#0171E3',
        dark: '#0171E3',
      },
      error: {
        light: '#FF7E7F',
        DEFAULT: '#FF747D',
        dark: '#F0516C',
      },
      success: {
        light: '#2BB8AEB3',
        DEFAULT: '#2BB8AE',
        dark: '#0BAA9E',
      },
      purple: {
        light: '#7D59E6B3',
        DEFAULT: '#7D59E6',
        dark: '#6138DB',
      },
      white: {
        light: 'rgb(255 255 255 / 87%)',
        lighter: 'rgb(255 255 255 / 70%)',
        darker: 'rgb(255 255 255 / 64%)',
        DEFAULT: 'white',
      }
    },
    fontFamily: {
      sans: ['Gilroy', 'sans-serif'],
    },
    spacing: spacings,
    borderRadius: {
      none: '0px',
      '4': '4px',
      DEFAULT: '14px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      round: '50%',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '2px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      card: '0px 8px 16px rgb(66, 82, 110 / 0.12)',
      menu: '0px 8px 16px rgba(66, 82, 110 / 0.16)',
      dialog: '0px 16px 24px rgba(66, 82, 110 / 0.24)',
      none: 'none',
    },
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      5: 5,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      infinite: 100000,
      auto: 'auto',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    preflight: false,
  },
}

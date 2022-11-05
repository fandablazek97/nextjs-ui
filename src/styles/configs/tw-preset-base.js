/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    screens: {
      xs: "352px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    fontFamily: {
      sans: "var(--font-sans)",
      display: "var(--font-displas)",
      serif: "var(--font-seris)",
      mono: "var(--font-mons)",
    },
    extend: {
      fontSize: {
        "10xl": ["9rem", "1"],
      },
      colors: {
        gray: {
          50: "hsla(var(--color-gray-50), <alpha-value>)",
          100: "hsla(var(--color-gray-100), <alpha-value>)",
          200: "hsla(var(--color-gray-200), <alpha-value>)",
          300: "hsla(var(--color-gray-300), <alpha-value>)",
          400: "hsla(var(--color-gray-400), <alpha-value>)",
          500: "hsla(var(--color-gray-500), <alpha-value>)",
          600: "hsla(var(--color-gray-600), <alpha-value>)",
          700: "hsla(var(--color-gray-700), <alpha-value>)",
          800: "hsla(var(--color-gray-800), <alpha-value>)",
          900: "hsla(var(--color-gray-900), <alpha-value>)",
          950: "hsla(var(--color-gray-950), <alpha-value>)",
        },
        copy: {
          muted: "hsla(var(--color-copy-muted), <alpha-value>)",
          DEFAULT: "hsla(var(--color-copy), <alpha-value>)",
          rich: "hsla(var(--color-copy-rich), <alpha-value>)",
        },
        body: {
          DEFAULT: "hsla(var(--color-body), <alpha-value>)",
          50: "hsla(var(--color-body-50), <alpha-value>)",
          100: "hsla(var(--color-body-100), <alpha-value>)",
          200: "hsla(var(--color-body-200), <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsla(var(--color-primary), <alpha-value>)",
          active: "hsla(var(--color-primary-active), <alpha-value>)",
          content: "hsla(var(--color-primary-content), <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsla(var(--color-secondary), <alpha-value>)",
          active: "hsla(var(--color-secondary-active), <alpha-value>)",
          content: "hsla(var(--color-secondary-content), <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsla(var(--color-accent), <alpha-value>)",
          active: "hsla(var(--color-accent-active), <alpha-value>)",
          content: "hsla(var(--color-accent-content), <alpha-value>)",
        },
        neutral: {
          DEFAULT: "hsla(var(--color-neutral), <alpha-value>)",
          active: "hsla(var(--color-neutral-active), <alpha-value>)",
          content: "hsla(var(--color-neutral-content), <alpha-value>)",
        },
        info: {
          DEFAULT: "hsla(var(--color-info), <alpha-value>)",
          active: "hsla(var(--color-info-active), <alpha-value>)",
          content: "hsla(var(--color-info-content), <alpha-value>)",
        },
        success: {
          DEFAULT: "hsla(var(--color-success), <alpha-value>)",
          active: "hsla(var(--color-success-active), <alpha-value>)",
          content: "hsla(var(--color-success-content), <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsla(var(--color-warning), <alpha-value>)",
          active: "hsla(var(--color-warning-active), <alpha-value>)",
          content: "hsla(var(--color-warning-content), <alpha-value>)",
        },
        error: {
          DEFAULT: "hsla(var(--color-error), <alpha-value>)",
          active: "hsla(var(--color-error-active), <alpha-value>)",
          content: "hsla(var(--color-error-content), <alpha-value>)",
        },
      },
      typography: {
        framework: {
          css: {
            "--tw-prose-body": "hsl(var(--color-copy))",
            "--tw-prose-headings": "hsl(var(--color-copy-rich))",
            "--tw-prose-lead": "hsl(var(--color-copy-muted))",
            "--tw-prose-links": "hsl(var(--color-primary))",
            "--tw-prose-bold": "hsl(var(--color-copy-rich))",
            "--tw-prose-counters": "hsl(var(--color-copy-muted))",
            "--tw-prose-bullets": "hsl(var(--color-primary))",
            "--tw-prose-hr": "hsl(var(--color-gray-200))",
            "--tw-prose-quotes": "hsl(var(--color-copy-rich))",
            "--tw-prose-quote-borders": "hsl(var(--color-gray-200))",
            "--tw-prose-captions": "hsl(var(--color-copy))",
            "--tw-prose-code": "hsl(var(--color-copy-rich))",
            "--tw-prose-pre-code": "hsl(var(--color-gray-200))",
            "--tw-prose-pre-bg": "hsl(var(--color-copy))",
            "--tw-prose-th-borders": "hsl(var(--color-gray-300))",
            "--tw-prose-td-borders": "hsl(var(--color-gray-200))",
            "--tw-prose-invert-hr": "hsl(var(--color-gray-800))",
            "--tw-prose-invert-pre-code": "hsl(var(--color-gray-800))",
            "--tw-prose-invert-th-borders": "hsl(var(--color-gray-700))",
            "--tw-prose-invert-td-borders": "hsl(var(--color-gray-800))",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes -> https://github.com/tailwindlabs/tailwindcss-forms
    }),
    require("@tailwindcss/typography"),
  ],
};

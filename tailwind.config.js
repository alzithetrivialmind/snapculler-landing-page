/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'Inter', 'sans-serif'],
                brand: ['Outfit', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                serif: ['Instrument Serif', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                background: "oklch(var(--background))",
                foreground: "oklch(var(--foreground))",
                card: "oklch(var(--card))",
                "card-foreground": "oklch(var(--card-foreground))",
                popover: "oklch(var(--popover))",
                "popover-foreground": "oklch(var(--popover-foreground))",
                primary: "oklch(var(--primary))",
                "primary-foreground": "oklch(var(--primary-foreground))",
                secondary: "oklch(var(--secondary))",
                "secondary-foreground": "oklch(var(--secondary-foreground))",
                muted: "oklch(var(--muted))",
                "muted-foreground": "oklch(var(--muted-foreground))",
                accent: "oklch(var(--accent))",
                "accent-foreground": "oklch(var(--accent-foreground))",
                destructive: "oklch(var(--destructive))",
                "destructive-foreground": "oklch(var(--destructive-foreground))",
                border: "oklch(var(--border))",
                input: "oklch(var(--input))",
                ring: "oklch(var(--ring))",
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

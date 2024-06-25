import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				"fade-out-left": {
					"0%": { opacity: "1", transform: "translateX(0)" },
					"100%": { opacity: "0", transform: "translateX(-100%)" },
				},
			},
			animation: {
				"fade-out-left": "fade-out-left 0.5s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
export default config;

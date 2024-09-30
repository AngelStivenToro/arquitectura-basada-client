import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "#00000000",
			"soft-shadow": "0px 0px 6px rgba(33, 13, 5, 0.14)",
			shadow: "0px 4px 8px rgba(33, 13, 5, 0.16)",
			"strong-shadow": "0 9px 32px -1px rgba(0, 0, 0, 0.5)",
			"default-white": "#ffff",
			"soft-white": "#f9f9f9",
			"off-white": "#f3f3f3",
			"custom-black": "#1B1B1B",
			"blurred-white": "#ffffffc7",
			"soft-gray": "#4A4A4A",
			gray: "#f3f3f3",
			"dark-gray": "#2B2B2B",
			"soft-green": "#75f0a0",
			green: "#1CCC5B",
			"dark-green": "#117a37",
			"soft-blue": "#729cff",
			blue: "#2D6BFF",
			"dark-blue": "#1F4AB2",
			"soft-red": "#ff8a8a",
			red: "#e72828",
			"dark-red": "#8b1111",
			"soft-purple": "#540000",
			purple: "#612D8A",
			"dark-purple": "#381850",
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			layout: {},
			themes: {
				light: {
					colors: {
						primary: { DEFAULT: "#2D6BFF", foreground: "#ffff" },
						secondary: { DEFAULT: "#540000", foreground: "#ffff" },
						default: { DEFAULT: "#e9e9e9", foreground: "#000" },
						background: { DEFAULT: "#f3f3f3", foreground: "#000" },
						foreground: { DEFAULT: "#000", foreground: "#ffff" },
						danger: { DEFAULT: "#990000", foreground: "#ffff" },
						focus: "#990000",
						content1: { DEFAULT: "#f3f3f3", foreground: "#000" },
						content2: "#e9e9e9",
						content3: "#e9e9e9",
						content4: "#1ccc5b",
						overlay: "#1ccc5b",
						success: "#1ccc5b",
						warning: "#1ccc5b",
						divider: "#dbdbdb",
						blurred: "#ffffffc7",
					},
				},
			},
		}),
	],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"primary-reguar": ["Regular", "sans-serif"],
				"primary-medium": ["Medium", "sans-serif"],
				"primary-semi-bold": ["SemiBold", "sans-serif"],
				"primary-bold": ["Bold", "sans-serif"],
				"primary-extra-bold": ["ExtraBold", "sans-serif"],
			},
			backgroundImage: {
				"main-gradient": `linear-gradient(90deg, #FF5400, #FFB800)`,
				"mobile-landscape": "url('../public/images/MobileLandscape.jpg')",
				"mobile-landscape2": "url('../public/images/MobileLandscape2.jpg')",
				"mobile-landscape3": "url('../public/images/MobileLandscape3.jpg')",
			},
		},
	},
	plugins: [],
};

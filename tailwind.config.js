/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				phone: "390px",
				tablet: "700px",
				laptop: "1024px",
				desktop: "1920px",
			},
			fontFamily: {
				"primary-regular": ["Regular", "sans-serif"],
				"primary-medium": ["Medium", "sans-serif"],
				"primary-semi-bold": ["SemiBold", "sans-serif"],
				"primary-bold": ["Bold", "sans-serif"],
				"primary-extra-bold": ["ExtraBold", "sans-serif"],
			},
			backgroundImage: {
				"featured-projects": "linear-gradient(0deg, #06022b 40%, #010010 60%);",
				"featured-tablet-projects":
					"linear-gradient(0deg, #06022b 20%, #010010 20%);",
				"main-gradient": `linear-gradient(90deg, #FF5400, #FFB800)`,
				"secondary-gradient": `linear-gradient(90deg, rgba(255, 84, 0, 0.6), rgba(255, 184, 0, 0.6))`,
				landscape: "url('../public/images/Landscape.jpg')",
				landscape2: "url('../public/images/Landscape2.jpg')",
				landscape3: "url('../public/images/Landscape3.jpg')",
				"tablet-landscape": "url('../public/images/TabletLandscape.jpg')",
				"tablet-landscape2": "url('../public/images/TabletLandscape2.jpg')",
				"tablet-landscape3": "url('../public/images/TabletLandscape3.jpg')",
				"mobile-landscape": "url('../public/images/MobileLandscape.jpg')",
				"mobile-landscape2": "url('../public/images/MobileLandscape2.jpg')",
				"mobile-landscape3": "url('../public/images/MobileLandscape3.jpg')",
			},
		},
	},
	plugins: [],
};

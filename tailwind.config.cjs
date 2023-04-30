/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns:{
				'postCard':'repeat(auto-fill, minmax(10rem, 1fr))',
				'15': 'repeat(auto-fill, minmax(15rem, 1fr));'
			}
		},
	},
	plugins: [],
}

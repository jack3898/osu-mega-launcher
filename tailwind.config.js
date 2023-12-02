import colors from 'tailwindcss/colors';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.tsx', 'src/**/*.ts', 'public/**/*.html'],
	theme: {
		extend: {
			colors: {
				default: colors.zinc[400],
				primary: colors.violet[400],
				success: colors.green[400],
				info: colors.indigo[400],
				warning: colors.amber[400],
				danger: colors.red[400]
			}
		}
	},
	plugins: []
};

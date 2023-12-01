module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/electron',
		'plugin:import/typescript',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				tabWidth: 4,
				useTabs: true,
				semi: true,
				bracketSpacing: true,
				printWidth: 125,
				trailingComma: 'none',
				arrowParens: 'always',
				endOfLine: 'lf'
			}
		],
		indent: 'off',
		'linebreak-style': ['error', 'unix'],
		semi: ['error', 'always'],
		'no-duplicate-imports': 'error',
		'no-constant-condition': 'off',
		'@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error'
	},
	ignorePatterns: ['dist']
};

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@ianvs/prettier-plugin-sort-imports').PluginConfig } */
const config = {
  useTabs: false,
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/env$',
    '^~/content',
    '^~/types/(.*)$|^~/types$',
    '^~/db/(.*)$|^~/db$',
    '^~/server/(.*)$',
    '^~/lib/(.*)$',
    '^~/hooks/(.*)$',
    '^~/components/ui/(.*)$',
    '^~/components/(.*)$',
    '^~/styles/(.*)$',
    '',
    '^[./]',
  ],
  tailwindAttributes: ['tw', 'classNames'],
  tailwindFunctions: ['cva'],
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};

export default config;

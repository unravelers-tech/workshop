module.exports = {
  'root': true,
  'plugins': [
    'import',
    'promise',
    'security',
    'no-secrets',
    'filenames',
    'unicorn',
    'optimize-regex',
    'lodash'
  ],
  parser: '@typescript-eslint/parser',
  'overrides': [
    {
      'files': [
        '*.ts',
      ],

      'extends': [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:promise/recommended',
        'plugin:security/recommended',
        'plugin:lodash/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
        'plugin:prettier/recommended'
      ],
      'rules': {
        'prettier/prettier': [
          'error',
          {
            'singleQuote': true,
            'trailingComma': 'all',
            'bracketSameLine': true,
            'bracketSpacing': true,
            'printWidth': 100,
          }
        ],

        // ---- Common ----
        'quotes': [
          'error',
          'single',
          {
            'avoidEscape': true,
            'allowTemplateLiterals': false
          }
        ],
        'consistent-return': 'off',
        'linebreak-style': 'off',
        'class-methods-use-this': 'off',
        'no-empty': ['error', { 'allowEmptyCatch': true }],
        'no-underscore-dangle': 'off',
        'object-shorthand': [
          2,
          'properties'
        ],
        'arrow-body-style': 'off',
        'padding-line-between-statements': [
          'error',
          {
            'blankLine': 'always',
            'prev': 'multiline-block-like',
            'next': '*'
          },
          {
            'blankLine': 'always',
            'prev': [
              'const',
              'let',
              'var'
            ],
            'next': '*'
          },
          {
            'blankLine': 'any',
            'prev': [
              'const',
              'let',
              'var'
            ],
            'next': [
              'const',
              'let',
              'var'
            ]
          },
          {
            'blankLine': 'always',
            'prev': '*',
            'next': [
              'return',
              'throw',
              'try',
              'while',
              'do',
              'if',
              'switch',
              'function',
              'for',
              'multiline-const'
            ]
          },
          {
            'blankLine': 'always',
            'prev': 'multiline-const',
            'next': '*'
          }
        ],

        // ---- Import ----
        'import/order': [
          'error',
          {
            'groups': [
              'builtin',
              'external',
              'internal'
            ],
            'newlines-between': 'always'
          }
        ],
        'import/newline-after-import': 'warn',
        'import/no-anonymous-default-export': 'warn',
        'import/no-default-export': 'warn',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-default': 'off',

        // ---- Optimize ----
        'optimize-regex/optimize-regex': 'warn',

        // ---- Lodash ----
        'lodash/prefer-lodash-method': 'off',
        'lodash/prefer-noop': 'off',
        'lodash/prefer-constant': 'off',
        'lodash/path-style': 'off',
        'lodash/prop-shorthand': 'off',
        'lodash/matches-prop-shorthand': 'off',
        'lodash/import-scope': 'off',

        // ---- Security ----
        'security/detect-object-injection': 'off',

        // ---- Filenames ----
        'filenames/match-regex': [
          'error',
          '^[a-z0-9.-]+$',
          false
        ],
        'filenames/match-exported': 'off',
        'filenames/no-index': 'off',

        // ---- Unicorn ----
        'unicorn/no-useless-undefined': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-static-only-class': 'off',
        'unicorn/prevent-abbreviations': [
          'error',
          {
            'replacements': {
              'ctx': false,
              'props': false,
              'req': false,
              'res': false,
              'inputRef': false,
              'prev': false,
              'ref': false,
              'src': false
            }
          }
        ],
        'unicorn/consistent-function-scoping': 'off',

        // ---- Typescript ----
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'warn',
          {
            'accessibility': 'no-public'
          }
        ],
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            'multiline': {
              'delimiter': 'semi',
              'requireLast': true
            },
            'singleline': {
              'delimiter': 'semi',
              'requireLast': false
            }
          }
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            'allowExpressions': true
          }
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            'selector': [
              'variable',
              'parameter',
              'classProperty',
              'typeProperty',
              'parameterProperty'
            ],
            'types': [
              'boolean'
            ],
            'format': [
              'PascalCase'
            ],
            'leadingUnderscore': 'allow',
            'prefix': [
              'is',
              'should',
              'has',
              'can',
              'did',
              'will',
              'does',
              'do'
            ],
            'filter': {
              // You can expand this regex to add more allowed names.
              'regex': '^(condition|debug|production)$',
              'match': false
            }
          },
          {
            'selector': [
              'variable',
              'function',
              'parameter',
              'classProperty',
              'objectLiteralProperty',
              'typeProperty',
              'parameterProperty',
              'classMethod',
              'objectLiteralMethod',
              'typeMethod'
            ],
            'format': [
              'camelCase'
            ],
            'leadingUnderscore': 'require',
            'modifiers': [
              'private'
            ]
          },
          {
            'selector': [
              'class',
              'interface',
              'typeAlias',
              'enum',
              'enumMember'
            ],
            'format': [
              'PascalCase'
            ]
          },
          {
            'selector': [
              'variable',
              'function',
              'parameter',
              'classProperty',
              'objectLiteralProperty',
              'typeProperty',
              'parameterProperty',
              'classMethod',
              'objectLiteralMethod',
              'typeMethod'
            ],
            'format': [
              'camelCase',
              'PascalCase'
            ],
            'leadingUnderscore': 'forbid',
            'modifiers': [
              'public',
              'protected'
            ]
          }
        ]
      }
    },
  ]
};

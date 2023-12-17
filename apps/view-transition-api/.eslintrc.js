module.exports = {
  extends: '../../.eslintrc.js',
  ignorePatterns: [
    "!**/*"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: [
          "./tsconfig.json"
        ]
      },
    }
  ]
}

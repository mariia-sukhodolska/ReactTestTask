module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion:  2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx:  true
        }
    },
    rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-console": "error",
        "no-debugger": "error"
    },
    settings: {
        react: {
            version: 'detect'
        },
        "import/resolver": {
            "node": {
                "extensions": [".ts", ".tsx"],
                "path": ["src/"]
            }
        }
    },
};
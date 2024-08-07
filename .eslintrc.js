module.exports = {
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        }
    },
    rules: {
        // General
        "indent": "off",
        "linebreak-style": ["error", "unix"],
        "quotes": ["warn", "double"],
        "semi": ["error", "always"],
        "object-curly-spacing": ["warn", "always"],
        "no-unused-vars": "off",
        "arrow-body-style": ["warn", "as-needed"],
        "import/no-unresolved": "error",
        "comma-dangle": ["error", "never"],
        "no-param-reassign": "warn",

        // TypeScript
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/indent": ["warn", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],

        // Imports
        "import/no-useless-path-segments": ["warn", { noUselessIndex: true }],
        "import/newline-after-import": ["warn", {
            count: 2,
            considerComments: true,
            exactCount: true
        }],
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: true
            }
        ],
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["sibling", "parent"],
                    "index",
                    "unknown"
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ]
    }
};

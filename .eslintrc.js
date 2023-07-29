module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "eslint:recommended",
        "prettier",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:boundaries/recommended",
        "plugin:storybook/recommended",
        "plugin:react-hooks/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    plugins: ["react", "prettier", "react-hooks", "@typescript-eslint"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "import/no-named-as-default": "off",
        "storybook/default-exports": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-invalid-void-type": "off",
        "no-case-declarations": "off",
        "no-new": "off",
        "no-redeclare": "off",
        allowAsStatement: "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off", //return for function
        "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
        "react-hooks/exhaustive-deps": "warn", // Проверяем зависимости эффекта
        "@typescript-eslint/require-ts-comment-description": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "arrow-body-style": ["error", "as-needed"],
        "@typescript-eslint/no-confusing-void-expression": [
            "error",
            { ignoreArrowShorthand: true, ignoreVoidOperator: true },
        ],
        "@typescript-eslint/array-type": ["error", { default: "array" }],
        "prettier/prettier": "error",
        "import/order": [
            "error",
            {
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                "newlines-between": "always",
                pathGroups: [
                    {
                        group: "internal",
                        position: "after",
                        pattern: "~/processes/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "~/pages/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "~/widgets/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "~/features/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "~/entities/**",
                    },
                    {
                        group: "internal",
                        position: "after",
                        pattern: "~/shared/**",
                    },
                ],
                pathGroupsExcludedImportTypes: ["builtin"],
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                ],
            },
        ],
        "no-restricted-imports": [
            "error",
            {
                patterns: [
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["~/app/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["~/processes/*/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["~/pages/*/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["~/widgets/*/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["~/features/*/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["~/entities/*/**"],
                    },
                    {
                        message:
                            "Private imports are prohibited, use public imports instead",
                        group: ["~/shared/*/*/**"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/app"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/processes"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/pages"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/widgets"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/features"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/entities"],
                    },
                    {
                        message:
                            "Prefer absolute imports instead of relatives (for root modules)",
                        group: ["../**/shared"],
                    },
                ],
            },
        ],
        "boundaries/element-types": [
            "warn",
            {
                default: "disallow",
                rules: [
                    {
                        from: "app",
                        allow: [
                            "processes",
                            "pages",
                            "widgets",
                            "features",
                            "entities",
                            "shared",
                        ],
                    },
                    {
                        from: "processes",
                        allow: [
                            "pages",
                            "widgets",
                            "features",
                            "entities",
                            "shared",
                        ],
                    },
                    {
                        from: "pages",
                        allow: ["widgets", "features", "entities", "shared"],
                    },
                    {
                        from: "widgets",
                        allow: ["features", "entities", "shared"],
                    },
                    {
                        from: "features",
                        allow: ["entities", "shared"],
                    },
                    {
                        from: "entities",
                        allow: ["shared"],
                    },
                    {
                        from: "shared",
                        allow: ["shared"],
                    },
                ],
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {},
        },
        "boundaries/elements": [
            {
                type: "app",
                pattern: "app/*",
            },
            {
                type: "processes",
                pattern: "processes/*",
            },
            {
                type: "pages",
                pattern: "pages/*",
            },
            {
                type: "widgets",
                pattern: "widgets/*",
            },
            {
                type: "features",
                pattern: "features/*",
            },
            {
                type: "entities",
                pattern: "entities/*",
            },
            {
                type: "shared",
                pattern: "shared/*",
            },
        ],
        "boundaries/ignore": ["**/*.test.*"],
    },
    parser: "@typescript-eslint/parser",
    overrides: [
        {
            files: ["**/*.test.*"],
            rules: {
                "boundaries/element-types": "off",
            },
        },
        {
            files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
            rules: {
                "storybook/hierarchy-separator": "error",
                "storybook/default-exports": "off",
                "@typescript-eslint/consistent-type-assertions": "off",
            },
        },
        {
            files: ["**/*.@(ts|tsx)"],
            rules: {
                "no-undef": "off",
                "@typescript-eslint/ban-types": [
                    "error",
                    {
                        extendDefaults: true,
                        types: {
                            "{}": false,
                        },
                    },
                ],
            },
        },
    ],
};

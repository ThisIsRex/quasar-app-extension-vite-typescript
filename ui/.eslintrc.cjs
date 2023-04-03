module.exports = {
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // This option interrupts the configuration hierarchy at this file
    // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
    root: true,

    // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
    // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
    // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
    parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        extraFileExtensions: ['.vue'],
    },

    env: {
        browser: true,
        es2021: true,
        node: true,
        'vue/setup-compiler-macros': true,
    },

    // Rules order is important, please avoid shuffling them
    extends: [
        // Base ESLint recommended rules
        // 'eslint:recommended',

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
        // ESLint typescript rules
        'plugin:@typescript-eslint/recommended',

        // Uncomment any of the lines below to choose desired strictness,
        // but leave only one uncommented!
        // See https://eslint.vuejs.org/rules/#available-rules
        'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
        // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
        // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

        // https://github.com/prettier/eslint-config-prettier#installation
        // usage with Prettier, provided by 'eslint-config-prettier'.
        'prettier',
    ],

    plugins: [
        // required to apply rules which need type information
        '@typescript-eslint',

        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
        // required to lint *.vue files
        'vue',

        // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
        // Prettier has not been included as plugin to avoid performance impact
        // add it as an extension for your IDE
    ],

    globals: {
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
    },

    // add your custom rules here
    rules: {
        'prefer-promise-reject-errors': 'off',

        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],

        // this rule, if on, would require explicit return type on the `render` function
        '@typescript-eslint/explicit-function-return-type': 'off',

        // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
        '@typescript-eslint/no-var-requires': 'off',

        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        //BASED ON:
        //Ctrl+F названия правила, чтобы подробнее прочитать, что оно значит
        //https://github.com/leonidlebedev/javascript-airbnb

        semi: 'error',

        //#region vars
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        '@typescript-eslint/prefer-as-const': 'error',
        'no-var': 'error',
        'no-undef': 'error',
        'one-var': ['warn', 'never'],
        'no-multi-assign': ['error'],
        //#endregion

        //#region objects
        'no-new-object': 'error',
        'object-shorthand': ['error', 'always'], //CHECK
        'quote-props': [
            'error',
            'as-needed',
            {
                keywords: false,
                unnecessary: true,
                numbers: false,
            },
        ],

        'no-prototype-builtins': 'error',

        'prefer-object-spread': 'error',

        'prefer-object-spread': 'warn',
        //#endregion

        //#region arrays
        'no-array-constructor': 'error',
        'array-callback-return': 'error',
        //#endregion

        //#region strings
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'no-useless-escape': 'error',
        //#endregion

        //#region security
        'no-eval': 'error',
        'no-new-func': 'error',
        //#endregion

        //#region functions
        'wrap-iife': [
            'error',
            'outside',
            {
                functionPrototypeMethods: false,
            },
        ],

        'no-loop-func': 'warn',
        'prefer-rest-params': 'error',
        'default-param-last': 'error',

        'getter-return': [
            'error',
            {
                allowImplicit: true,
            },
        ],

        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': ['error', 'never'],

        'prefer-spread': 'warn',
        //#endregion

        //#region arrow functions
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'arrow-parens': ['error', 'always'],
        'arrow-body-style': [
            'error',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            },
        ],

        //#endregion

        //#region classes
        'no-dupe-class-members': 'warn',
        'class-methods-use-this': [
            'error',
            {
                exceptMethods: [],
            },
        ],
        //#endregion

        //#region modules
        'no-duplicate-imports': 'error',

        //#endregion

        //#region iterators
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        //#endregion

        //#region hoisting
        // eqeqeq: [
        //     'warn',
        //     'always',
        //     {
        //         null: 'ignore',
        //     },
        // ],
        'no-case-declarations': 'error',

        'no-unneeded-ternary': [
            'error',
            {
                defaultAssignment: false,
            },
        ],
        //#endregion

        //#region blocks
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                overrides: {},
            },
        ],

        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],

        'no-else-return': [
            'error',
            {
                allowElseIf: false,
            },
        ],
        //#endregion

        //#region tabs
        'space-before-blocks': 'error',
        'space-infix-ops': 'error',
        //#endregion

        //#region types
        'no-new-wrappers': 'error',
        radix: 'error',
        //#endregion

        //#region names

        camelcase: [
            'error',
            {
                properties: 'never',
                ignoreDestructuring: false,
            },
        ],

        'new-cap': [
            'error',
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
            },
        ],
        //#endregion
    },
};

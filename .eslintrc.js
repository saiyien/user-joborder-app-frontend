module.exports = {
    // ...other configurations...
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended', // Use the vue/recommended configuration
      ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'vue',
    ],
    globals: {
        google: true, // Allow the use of 'google' as a global variable
    },
};

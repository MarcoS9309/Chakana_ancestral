module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  plugins: ['html'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script'
  },
  rules: {
    // Errores comunes
    'no-undef': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    
    // Buenas prácticas
    'prefer-const': 'warn',
    'no-var': 'warn',
    'eqeqeq': 'warn',
    'curly': 'warn',
    
    // Estilo consistente
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'comma-trailing': 'off'
  },
  globals: {
    // Variables globales de la aplicación
    'chakanaApp': 'writable',
    'CHAKANA_DATA': 'readonly',
    'tourTimer': 'writable'
  }
};